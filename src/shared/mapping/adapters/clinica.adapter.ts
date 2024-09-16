import { ClinicaImpl } from "src/shared/mapping/entities";
import { ClinicaDTO } from "@mapping/dtos";

export class ClinicaAdapter {
    static fromDtoToModel(clinicaDto: ClinicaDTO): ClinicaImpl {
        return new ClinicaImpl(clinicaDto);
    }
}