import { EnderecoDTO } from "@mapping/dtos";
import { EnderecoImpl } from "src/shared/mapping/entities";

export class EnderecoAdapter {
    public static fromDtoToEntity(enderecoDto: EnderecoDTO): EnderecoImpl {
        return new EnderecoImpl(enderecoDto);
    }
}