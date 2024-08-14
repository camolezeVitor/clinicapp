export interface Conta {
    id: string;
    nome: string;
    descricao: string;
    valor: number;
    dataDePagamento: Date;
    foiPago: boolean;
}