import { DoencaDTO } from "@mapping/dtos";
import { DoencaImpl } from "src/shared/mapping/entities";

export class DoencaAdapter {
    public static fromDtoToEntity(doencaDto: DoencaDTO): DoencaImpl {
        return new DoencaImpl(doencaDto);
    }
}