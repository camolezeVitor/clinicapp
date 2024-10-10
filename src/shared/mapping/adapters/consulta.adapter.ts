import { ConsultaDTO, createConsultaDTOFromEntity } from "@mapping/dtos";
import { ConsultaImpl } from "src/shared/mapping/entities";

export class ConsultaAdapter {
    public static fromDTOToEntity(consultaDto: ConsultaDTO): ConsultaImpl {
        return new ConsultaImpl(consultaDto);
    }
    public static fromEntityToDTO(consultaEntity: ConsultaImpl): ConsultaDTO {
        return createConsultaDTOFromEntity(consultaEntity);
    }
}