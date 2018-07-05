export class Cliente {

    id: string;
    nome: string;
    limiteCredito: string;
    risco: string;
    txJuros: string;
    limiteCreditoCalculado: string;

    constructor(
        nome: string,
        limiteCredito: string,
        risco: string
    ) {}

}
