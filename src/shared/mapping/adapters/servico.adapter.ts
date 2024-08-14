import { ServicoDTO } from "@mapping/dtos";
import { ServicoImpl } from "@mapping/models";

export class ServicoAdapter {
    public static fromDtoToAdapter(servicoDto: ServicoDTO): ServicoImpl {
        return new ServicoImpl(servicoDto);
    }
}