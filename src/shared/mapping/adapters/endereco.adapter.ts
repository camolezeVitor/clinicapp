import { createEnderecoDTOFromEntity, EnderecoDTO } from "@mapping/dtos";
import { EnderecoImpl } from "src/shared/mapping/entities";

export class EnderecoAdapter {
    public static fromDTOToEntity(enderecoDto: EnderecoDTO): EnderecoImpl {
        return new EnderecoImpl(enderecoDto);
    }
    public static fromEntityToDTO(enderecoEntity: EnderecoImpl): EnderecoDTO {
        return createEnderecoDTOFromEntity(enderecoEntity);
    }
}