import { Conta } from "../model/Conta";

export interface ContaRepository{

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    deletar(conta: Conta): void;
    
    //Métodos bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor:number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number):void;
}