import { createDoencaDTOFromEntity, DoencaDTO } from "@mapping/dtos";
import { DoencaImpl } from "src/shared/mapping/entities";

export class DoencaAdapter {
    public static fromDTOToEntity(doencaDto: DoencaDTO): DoencaImpl {
        return new DoencaImpl(doencaDto);
    }
    public static fromEntityToDTO(doencaEntity: DoencaImpl): DoencaDTO {
        return createDoencaDTOFromEntity(doencaEntity);
    }
}