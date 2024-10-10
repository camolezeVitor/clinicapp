import { createUsuarioDTOFromEntity, UsuarioDTO } from "@mapping/dtos";
import { UsuarioImpl } from "src/shared/mapping/entities";

export class UsuarioAdapter {
    public static fromDTOToEntity(usuarioDto: UsuarioDTO): UsuarioImpl {
        return new UsuarioImpl(usuarioDto);
    }
    public static fromEntityToDTO(usuarioEntity: UsuarioImpl): UsuarioDTO {
        return createUsuarioDTOFromEntity(usuarioEntity);
    }
}