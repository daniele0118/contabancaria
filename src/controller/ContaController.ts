import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{



    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if( buscaConta != null ){
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red,"\nA conta numero "+ numero + " nao foi encontrada",colors.reset);
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`A conta ${conta.numero}foi adicionada!`);
    }


    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    atualizar(conta: Conta): void{
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green,"A conta numero: " + conta.numero + " foi atualizada com sucesso",
            colors.reset);
        }else
        console.log(colors.fg.red,"Conta de numero "+ conta.numero + " nao foi encontrada!", colors.reset)
    }
    
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta),1);
            console.log(`A conta número ${numero} foi excluída com êxito!`);
        }else{
            console.log("\nConta não encontrada");
        }
    }

    
    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter( c => 
            c.titular.toLocaleUpperCase().includes(titular.toLocaleUpperCase()))

            for (let conta of listaContasPorTitular){
                conta.visualizar();
            }
    }
    
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true)
            console.log(`O saque na conta número ${numero} foi efetuado com êxito!`);
        }else{
            console.log("\nConta não encontrada");
        }
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor)
            console.log(`O depósito na conta número ${numero} foi efetuado com êxito!`);
        }else{
            console.log("\nConta não encontrada");
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true){
            contaDestino.depositar(valor);
            console.log(`A transferência da conta número ${numeroOrigem} para a conta ${numeroDestino} 
            foi efetuada com êxito!`);
            }
        }else{
            console.log("\nConta origem e/ou conta de destino não foram encontrada(s)");
        }
    }

    //Métodos auxiliares
    public gerarNumero(): number{
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for( let conta of this.listaContas){
            if(conta.numero === numero)
            return conta;
        }

        return null;
    }

}