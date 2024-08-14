import { DoencaDTO } from "@mapping/dtos";
import { DoencaImpl } from "@mapping/models";

export class DoencaAdapter {
    public static fromDtoToModel(doencaDto: DoencaDTO): DoencaImpl {
        return new DoencaImpl(doencaDto);
    }
}