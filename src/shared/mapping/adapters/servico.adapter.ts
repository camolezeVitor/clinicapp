import { createServicoDTOFromEntity, ServicoDTO } from "@mapping/dtos";
import { ServicoImpl } from "src/shared/mapping/entities";

export class ServicoAdapter {
    public static fromDTOToEntity(servicoDto: ServicoDTO): ServicoImpl {
        return new ServicoImpl(servicoDto);
    }
    public static fromEntityToDTO(servicoEntity: ServicoImpl): ServicoDTO {
        return createServicoDTOFromEntity(servicoEntity);
    }
}