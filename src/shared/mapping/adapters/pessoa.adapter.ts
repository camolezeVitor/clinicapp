import { PessoaDTO } from "@mapping/dtos";
import { PessoaImpl } from "src/shared/mapping/entities";

export class PessoaAdapter {
    public static fromDtoToEntity(pessoaDto: PessoaDTO): PessoaImpl {
        return new PessoaImpl(pessoaDto);
    }
}