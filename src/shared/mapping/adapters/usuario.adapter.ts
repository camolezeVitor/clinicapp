import { UsuarioDTO } from "@mapping/dtos";
import { UsuarioImpl } from "src/shared/mapping/entities";

export class UsuarioAdapter {
    public static fromDtoToEntity(usuarioDto: UsuarioDTO): UsuarioImpl {
        return new UsuarioImpl(usuarioDto);
    }
}