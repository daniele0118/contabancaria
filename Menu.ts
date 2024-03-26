import readlinesync = require("readline-sync");
//import {Colors} from "./src/util/Colors";
import {Conta} from "./src/model/Conta";

export function main(){

    let opcao: number;

    let c1: Conta = new Conta(1, 123, 1, "Espionildo", 10000000);

    c1.sacar(200000000);
    c1.visualizar();



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
                console.log("\nCriar conta");
                break;
            case 2:
                console.log("\nListar todas as contas");
                break;
            case 3:
                console.log("\nBuscar conta por numero");
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



}

main();