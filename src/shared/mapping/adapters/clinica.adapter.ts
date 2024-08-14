import { ClinicaImpl } from "@mapping/models";
import { ClinicaDTO } from "@mapping/dtos";

export class ClinicaAdapter {
    static fromDtoToModel(clinicaDto: ClinicaDTO): ClinicaImpl {
        return new ClinicaImpl(clinicaDto);
    }
}