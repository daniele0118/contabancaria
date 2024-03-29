import readlinesync = require("readline-sync");
//import { Colors } from "./src/util/Colors"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { ContaController } from "./src/controller/ContaController";
import { colors } from "./src/util/Colors";

export function main(){

    let numero, opcao, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    let contas: ContaController = new ContaController();

    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];


    // const cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Espionildo", 500000, 1000);
    // contas.cadastrar(cc1);

    // const cp1: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Jaca", 1000, 10);
    // contas.cadastrar(cp1);



    while(true){

        console.log("\n\n.-~*´¨`*·~-.¸_Branco do Basil_,.-~*´¨`*·~-.\n\n");
        console.log("1:Criar conta::::::::::::::::::::::::::๑۩۩๑");
        console.log("2:Listar todas as contas:::::::::::::::๑۩۩๑");
        console.log("3:Buscar conta por numero::::::::::::::๑۩۩๑");
        console.log("4:Atualizar dados da conta:::::::::::::๑۩۩๑");
        console.log("5:Apagar conta:::::::::::::::::::::::::๑۩۩๑");
        console.log("6:Sacar::::::::::::::::::::::::::::::::๑۩۩๑");
        console.log("7:Depositar::::::::::::::::::::::::::::๑۩۩๑");
        console.log("8:Tranferir valores entre contas:::::::๑۩۩๑");
        console.log("9:Sair:::::::::::::::::::::::::::::::::๑۩۩๑");

        opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        if( opcao == 9 ){
            process.exit(0)   
        }

        switch(opcao){
            case 1:
                console.log("\nCriar conta:");

                agencia = readlinesync.questionInt("Insira o numero da agencia: ");
                titular = readlinesync.question("Insira o nome do titular da conta: ");
                tipo = readlinesync.keyInSelect(tiposContas,"", {cancel: false}) + 1;
                saldo = readlinesync.questionFloat("");
                switch(tipo){
                    case 1:
                        limite = readlinesync.questionFloat("Insira o limite da conta: ");
                        contas.cadastrar( new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                        saldo, limite));
                        break;
                    case 2:
                        aniversario = readlinesync.questionInt("Insira o dia do aniversario: ");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo,titular,
                        saldo, aniversario));
                        break;
                }
                break;
            case 2:
                console.log("\nListar todas as contas");
                contas.listarTodas();
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\nBuscar conta por numero", colors.reset);

                KeyPress()
                break;
            case 4:
                console.log("\nAtualizar dados da conta");
                break;
            case 5:
                console.log("\nApagar conta");
                break;
            case 6:
                console.log("\nSacar");
                break;
            case 7:
                console.log("\nDepositar");
                break;
            case 8:
                console.log("\nTranferir valores entre contas");
                break;
            case 9:
                console.log("\nSair");
                break;
            default:
                console.log("\nInsira uma opcao valida\n");
                break;
        }
    
    }

    function keyPress(): void{
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }

}

main();