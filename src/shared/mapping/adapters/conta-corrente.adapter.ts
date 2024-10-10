import { ContaCorrenteDTO, createContaCorrenteDTOFromEntity } from "@mapping/dtos";
import { ContaCorrenteImpl } from "src/shared/mapping/entities";

export class ContaCorrenteAdapter {
    public static fromDTOToEntity(contaCorrenteDto: ContaCorrenteDTO): ContaCorrenteImpl {
        return new ContaCorrenteImpl(contaCorrenteDto);
    }
    public static fromEntityToDTO(contaCorrenteEntity: ContaCorrenteImpl): ContaCorrenteDTO {
        return createContaCorrenteDTOFromEntity(contaCorrenteEntity);
    }
}