import { PacienteDTO } from "@mapping/dtos";
import { ContaCorrenteImpl } from "@mapping/models";
import { DoencaImpl } from "@mapping/models";
import { PessoaImpl } from "@mapping/models";
import { ProntuarioImpl } from "@mapping/models";


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