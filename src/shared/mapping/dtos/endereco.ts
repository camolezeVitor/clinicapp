import { Endereco } from "@mapping/core";
import { EnderecoImpl } from "@mapping/entities";

export type EnderecoDTO = Endereco;

export function createEnderecoDTOFromEntity(endereco: EnderecoImpl): EnderecoDTO {
    return {
        bairro: endereco.bairro,
        cep: endereco.cep,
        cidade: endereco.cidade,
        complemento: endereco.complemento,
        numero: endereco.numero,
        uf: endereco.uf
    }
}