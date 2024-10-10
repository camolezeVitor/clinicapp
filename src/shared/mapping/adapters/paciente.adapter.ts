import { createPacienteDTOFromEntity, PacienteDTO } from "@mapping/dtos";
import { PacienteImpl } from "src/shared/mapping/entities";

export class PacienteAdapter {
    public static fromDTOToEntity(pacienteDto: PacienteDTO): PacienteImpl {
        return new PacienteImpl(pacienteDto);
    }
    public static fromEntityToDTO(pacienteEntity: PacienteImpl) {
        return createPacienteDTOFromEntity(pacienteEntity);
    }
}