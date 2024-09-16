import { ConsultaDTO } from "@mapping/dtos";
import { ConsultaImpl } from "src/shared/mapping/entities";

export class ConsultaAdapter {
    public static fromDtoToModel(consultaDto: ConsultaDTO): ConsultaImpl {
        return new ConsultaImpl(consultaDto);
    }
}