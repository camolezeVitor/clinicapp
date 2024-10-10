import { ContaCorrenteDTO } from "@mapping/dtos";
import { ContaCorrenteImpl } from "src/shared/mapping/entities";

export class ContaCorrenteAdapter {
    public static fromDtoToEntity(contaCorrenteDto: ContaCorrenteDTO): ContaCorrenteImpl {
        return new ContaCorrenteImpl(contaCorrenteDto);
    }
}