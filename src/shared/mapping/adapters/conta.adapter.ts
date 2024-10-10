import { ContaDTO } from "@mapping/dtos";
import { ContaImpl } from "src/shared/mapping/entities";

export class ContaAdapter {
    public static fromDtoToEntity(contaDto: ContaDTO): ContaImpl {
        return new ContaImpl(contaDto);
    }
}