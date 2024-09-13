/**
 * @author camolezeVitor
 * @description
 * Quando for utlizar um componente dinâmico faça o uso desse template.
 * 
 * Se por alguma razão houver necessidade de utilizar um template mais elaborado,
 * não esqueça de colocar dentro do seu template a seguinte linha:
 * 
 * ```html
 *  if(dynamicComponent__){
 *      <ng-component-outlet [ngComponentOutlet]="dynamicComponent__"/>
 *  }
 * ```
 */
export const DynamicTemplate = `
    @if(dynamicComponent__){
        @if(data) {
            <ng-container *ngComponentOutlet="dynamicComponent__; inputs: data"/>
        } @else {
            <ng-container *ngComponentOutlet="dynamicComponent__"/>
        }
    }
`;