export interface Consulta {
    valor: number;
    valorTotalPago: number;
    data: Date;
    horarioInicio: string;
    horarioFim: string;
    concluida: boolean;
    foiPago: boolean;
}