import { PagamentoDTO } from "@mapping/dtos";
import { PagamentoImpl } from "src/shared/mapping/entities";

export class PagamentoAdapter {
    public static fromDtoToEntity(pagamentoDto: PagamentoDTO): PagamentoImpl {
        return new PagamentoImpl(pagamentoDto);
    }
}