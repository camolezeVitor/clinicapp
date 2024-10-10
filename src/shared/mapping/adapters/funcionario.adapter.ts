import { createFuncionarioDTOFromEntity, FuncionarioDTO } from "@mapping/dtos";
import { FuncionarioImpl } from "src/shared/mapping/entities";

export class FuncionarioAdapter {
    public static fromDTOToEntity(funcionarioDto: FuncionarioDTO): FuncionarioImpl {
        return new FuncionarioImpl(funcionarioDto);
    }
    public static fromEntityToDTO(funcionarioEntity: FuncionarioImpl): FuncionarioDTO {
        return createFuncionarioDTOFromEntity(funcionarioEntity);
    }
}