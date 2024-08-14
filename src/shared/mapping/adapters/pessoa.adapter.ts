import { PessoaDTO } from "@mapping/dtos";
import { PessoaImpl } from "@mapping/models";

export class PessoaAdapter {
    public static fromDtoToModel(pessoaDto: PessoaDTO): PessoaImpl {
        return new PessoaImpl(pessoaDto);
    }
}