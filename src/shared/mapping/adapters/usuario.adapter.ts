import { UsuarioDTO } from "@mapping/dtos";
import { UsuarioImpl } from "@mapping/models";

export class UsuarioAdapter {
    public static fromDtoToModel(usuarioDto: UsuarioDTO): UsuarioImpl {
        return new UsuarioImpl(usuarioDto);
    }
}