import { ContaDTO } from "@mapping/dtos";
import { ContaImpl } from "@mapping/models";

export class ContaAdapter {
    public static fromDtoToModel(contaDto: ContaDTO): ContaImpl {
        return new ContaImpl(contaDto);
    }
}