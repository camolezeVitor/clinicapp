import { FuncionarioDTO } from "@mapping/dtos";
import { FuncionarioImpl } from "src/shared/mapping/entities";

export class FuncionarioAdapter {
    public static fromDtoToEntity(funcionarioDto: FuncionarioDTO): FuncionarioImpl {
        return new FuncionarioImpl(funcionarioDto);
    }
}