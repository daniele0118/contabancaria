import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{

    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if( buscaConta != null ){
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red,"\nA conta numero "+ numero + " nao foi encontrada",colors.reset);
    }
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`A conta ${conta.numero}foi adicionada!`);
    }
    deletar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumero(): number{
        return ++ this.numero;
    }

    public buscaNoArray(numero: number): Conta | null{
        for( let conta of this.listaContas){
            if(conta.numero === numero)
            return conta;
        }

        return null;
    }

}