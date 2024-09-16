import { PacienteDTO } from "@mapping/dtos";
import { ContaCorrenteImpl } from "src/shared/mapping/entities";
import { DoencaImpl } from "src/shared/mapping/entities";
import { PessoaImpl } from "src/shared/mapping/entities";
import { ProntuarioImpl } from "src/shared/mapping/entities";


export class PacienteImpl {

    estadoAtual: string;
    pessoa?: PessoaImpl;
    prontuarios?: Array<ProntuarioImpl>;
    contaCorrente?: ContaCorrenteImpl;
    doencas?: Array<DoencaImpl>;

    constructor(pacienteDto: PacienteDTO) {

        //Parâmetros opcionais
        const { pessoa, prontuarios, contaCorrente, doencas } = pacienteDto;

        this.pessoa = pessoa ? new PessoaImpl(pessoa) : undefined;
        this.prontuarios = prontuarios ? 
            prontuarios.map(prontuarioDto => (new ProntuarioImpl(prontuarioDto))) : undefined;
        this.contaCorrente = contaCorrente ? new ContaCorrenteImpl(contaCorrente) : undefined;
        this.doencas = doencas ? doencas.map(doencaDto => (new DoencaImpl(doencaDto))) : undefined;

        this.estadoAtual = pacienteDto.estadoAtual;
    }
}