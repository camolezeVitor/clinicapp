export interface RegistrarUsuarioProtocol {

    enviarFormularioDeCadastro: (form?: string) => unknown;
    
    validarFormularioDeCadastro: (form?: string) => unknown;

}