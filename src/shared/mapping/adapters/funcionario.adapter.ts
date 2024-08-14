import { FuncionarioDTO } from "@mapping/dtos";
import { FuncionarioImpl } from "@mapping/models";

export class FuncionarioAdapter {
    public static fromDtoToModel(funcionarioDto: FuncionarioDTO): FuncionarioImpl {
        return new FuncionarioImpl(funcionarioDto);
    }
}