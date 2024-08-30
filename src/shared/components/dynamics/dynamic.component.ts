import { inject, NgZone, Type } from "@angular/core";
import { DynamicComponentProtocol, DynamicHandlerProtocol } from "@mapping/protocols";
import { Template } from "@mapping/types";
import { DynamicComponentCreationService } from "@services";
import { BehaviorSubject } from "rxjs";
import { DynamicStorager } from "./dynamic-storager";


type DynamicComponentConfig<T> = {
    templates: Array<Template<T>>,
    handler: DynamicHandlerProtocol<T> | BehaviorSubject<T> | any,
    defaultComponent?: Type<any>,
    loadingComponent?: Type<any>
}

/**
 * @author camolezeVitor_
 * @description
 * Essa classe pode ser utilizada para tornar um componente dinamico, ou seja
 * tornar ele com mais de 1 visão.
 * 
 * Exemplo de uso:
 * 
 * ```ts
 * 
 * Component({
 *  selector: "app-root",
 *  template: DynamicTemplate
 * })
 * export class AppComponent extends DynamicComponent< T > {
 *      constructor() {
 *          super({
 *              //Construtor...
 *          }) 
 *      }
 * }
 * ```
 * 
 * T pode ser entendido como um type como um substituto de um enum,
 * por exemplo:
 * 
 * ```ts
 * export type ValidacaoComBaseEmXFatores = "TIPO1" | "TIPO2" | "TIPO3"
 * ```
 * 
 * Essa validação deve ser feita com um serviço ou um behavior subject que nós chamaremos de
 * handler. Um handler é responsável por fazer todo o processo de "managing" desse type.
 * Se você quiser utilizar uma classe injetável própria como um handler, por lei deve se 
 * implementar o protocolo DynamicHandlerProtocol para fazer seu uso.
 * 
 * O handler é inserido na criação da super classe, onde existem os seguintes parâmetros.
 * 
 * ```ts
 * type DynamicComponentConfig<T> = {
 *      templates: Array<Template<T>>,
 *      handler: DynamicHandlerProtocol<T> | BehaviorSubject<T> | any,
 *      defaultComponent?: Type<any>,
 *      loadingComponent?: Type<any>
 *  }
 * ```
 * 
 * Agora iremos abordar cada tópico de maneira separada.
 * 
 * > ### Templates
 * > São os outros componentes para serem implementados, eles devem ser salvos dessa
 * > maneira para maior legibilidade do código:
 * > ```ts
 * > export const NomeDoComponenteTemplates: Array<Template< T >> = [
 * >     {component: ComponenteA, condition: typeof T },
 * >     {component: ComponenteB, condition: typeof T },
 * > ]
 * > ```
 * 
 * > ### Handler
 * > É o serviço ou o behavior subject que você gostaria de utilizar como validação,
 * > como por exemplo:
 * > ```ts
 * > Injectable();
 * > export class MeuServico implements DynamicHandlerProtocol<MeuTipoDeValidacao> { regras... };
 * >
 * > export const VALIDACAO: BehaviorSubject<MeuTipoDeValidacao> = new BehaviorSubject<MeuTipoDeValidacao>("sei lá...");
 * > ```
 * > Vale deixar claro que, se você for utilizar um serviço próprio não existe necessidade
 * > de injetar ele, apenas passe a classe dele no parametro do handler
 * 
 * > ### Default/Loading Component
 * > Essa explicação é mais simples e não tem muito segredo, são apenas componentes para deixar
 * > como padrão ou quando não houve o carregamento dos outros componentes.
 */
export abstract class DynamicComponent<T> implements DynamicComponentProtocol {

    //Armazenamento dos componentes 
    dynamicStorager__ : DynamicStorager<T>;

    //É o componente sendo mostrado na tela atualmente 
    dynamicComponent__: Type<any> | undefined;

    //Serviço para a validação e criação de componentes
    dynamicService__: DynamicComponentCreationService = inject(DynamicComponentCreationService);
    ngZone: NgZone = inject(NgZone);

    constructor(config: DynamicComponentConfig<T>) {

        this.dynamicComponent__ = config.defaultComponent || config.loadingComponent;

        //Todos os componentes são salvos no storager.
        this.dynamicStorager__ = new DynamicStorager<T>(config.templates)

        //O serviço fica observando qualquer mudança no handler, e quando houver a mudança
        //ele retorna essa mudança para o componente que logo em seguida chama a função
        //de atualização de componente
        this.dynamicService__.observeHandler(config.handler).subscribe(state => {
            this.setComponent(state);
        });
    }

    private setComponent(state: T) {
        //O NgZone é necessário para receber atualizações do estado da aplicação como um geral
        //sem ele não existe atualização visível no template.
        this.ngZone.run(() => {
            this.dynamicComponent__ = this.dynamicStorager__.getElement(state) as Type<any>;
        });
    }

    public clearComponent() {
        this.dynamicComponent__ = undefined;
    }
};