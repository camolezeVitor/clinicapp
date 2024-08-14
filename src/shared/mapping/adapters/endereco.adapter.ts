import { EnderecoDTO } from "@mapping/dtos";
import { EnderecoImpl } from "@mapping/models";

export class EnderecoAdapter {
    public static fromDtoToModel(enderecoDto: EnderecoDTO): EnderecoImpl {
        return new EnderecoImpl(enderecoDto);
    }
}