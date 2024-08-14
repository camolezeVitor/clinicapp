import { ContaCorrenteDTO } from "@mapping/dtos";
import { ContaCorrenteImpl } from "@mapping/models";

export class ContaCorrenteAdapter {
    public static fromDtoToModel(contaCorrenteDto: ContaCorrenteDTO): ContaCorrenteImpl {
        return new ContaCorrenteImpl(contaCorrenteDto);
    }
}