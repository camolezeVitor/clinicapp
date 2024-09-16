import { ContaCorrenteDTO } from "@mapping/dtos";
import { ContaCorrenteImpl } from "src/shared/mapping/entities";

export class ContaCorrenteAdapter {
    public static fromDtoToModel(contaCorrenteDto: ContaCorrenteDTO): ContaCorrenteImpl {
        return new ContaCorrenteImpl(contaCorrenteDto);
    }
}