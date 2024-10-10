import { ConsultaDTO } from "@mapping/dtos";
import { ConsultaImpl } from "src/shared/mapping/entities";

export class ConsultaAdapter {
    public static fromDtoToEntity(consultaDto: ConsultaDTO): ConsultaImpl {
        return new ConsultaImpl(consultaDto);
    }
}