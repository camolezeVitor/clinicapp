import { ClinicaImpl } from "src/shared/mapping/entities";
import { ClinicaDTO, createClinicaDTOFromEntity } from "@mapping/dtos";

export class ClinicaAdapter {
    public static fromDTOToEntity(clinicaDto: ClinicaDTO): ClinicaImpl {
        return new ClinicaImpl(clinicaDto);
    }
    public static fromEntityToDTO(clinicaEntity: ClinicaImpl): ClinicaDTO {
        return createClinicaDTOFromEntity(clinicaEntity);
    }
}