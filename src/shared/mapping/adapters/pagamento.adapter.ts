import { createPagamentoDTOFromEntity, PagamentoDTO } from "@mapping/dtos";
import { PagamentoImpl } from "src/shared/mapping/entities";

export class PagamentoAdapter {
    public static fromDTOToEntity(pagamentoDto: PagamentoDTO): PagamentoImpl {
        return new PagamentoImpl(pagamentoDto);
    }
    public static fromEntityToDTO(pagamentoEntity: PagamentoImpl): PagamentoDTO {
        return createPagamentoDTOFromEntity(pagamentoEntity);
    }
}