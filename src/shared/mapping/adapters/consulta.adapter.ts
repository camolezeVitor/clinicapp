import { ConsultaDTO } from "@mapping/dtos";
import { ConsultaImpl } from "@mapping/models";

export class ConsultaAdapter {
    public static fromDtoToModel(consultaDto: ConsultaDTO): ConsultaImpl {
        return new ConsultaImpl(consultaDto);
    }
}