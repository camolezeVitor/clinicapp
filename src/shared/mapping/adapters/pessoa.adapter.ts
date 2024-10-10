import { createPessoaDTOFromEntity, PessoaDTO } from "@mapping/dtos";
import { PessoaImpl } from "src/shared/mapping/entities";

export class PessoaAdapter {
    public static fromDTOToEntity(pessoaDto: PessoaDTO): PessoaImpl {
        return new PessoaImpl(pessoaDto);
    }
    public static fromEntityToDTO(pessoaEntity: PessoaImpl): PessoaDTO {
        return createPessoaDTOFromEntity(pessoaEntity);
    }
}