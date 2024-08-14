import { PagamentoDTO } from "@mapping/dtos";
import { PagamentoImpl } from "@mapping/models";

export class PagamentoAdapter {
    public static fromDtoToModel(pagamentoDto: PagamentoDTO): PagamentoImpl {
        return new PagamentoImpl(pagamentoDto);
    }
}