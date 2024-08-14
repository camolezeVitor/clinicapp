import { PacienteDTO } from "@mapping/dtos";
import { PacienteImpl } from "@mapping/models";

export class PacienteAdapter {
    public static fromDtoToModel(pacienteDto: PacienteDTO): PacienteImpl {
        return new PacienteImpl(pacienteDto);
    }
}