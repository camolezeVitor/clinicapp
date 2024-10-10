import { ContaDTO, createContaDTOFromEntity } from "@mapping/dtos";
import { ContaImpl } from "src/shared/mapping/entities";

export class ContaAdapter {
    public static fromDTOToEntity(contaDto: ContaDTO): ContaImpl {
        return new ContaImpl(contaDto);
    }
    public static fromEntityToDTO(contaEntity: ContaImpl): ContaDTO {
        return createContaDTOFromEntity(contaEntity);
    }
}