import { ServicoDTO } from "@mapping/dtos";
import { ServicoImpl } from "src/shared/mapping/entities";

export class ServicoAdapter {
    public static fromDtoToEntity(servicoDto: ServicoDTO): ServicoImpl {
        return new ServicoImpl(servicoDto);
    }
}