import { PacienteDTO } from "@mapping/dtos";
import { PacienteImpl } from "src/shared/mapping/entities";

export class PacienteAdapter {
    public static fromDtoToEntity(pacienteDto: PacienteDTO): PacienteImpl {
        return new PacienteImpl(pacienteDto);
    }
}