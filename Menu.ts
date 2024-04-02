import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { ContaController } from "./src/controller/ContaController";
import { colors } from "./src/util/Colors";

export function main(){
    //Instância da classe ContaController
    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;



    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];


     const cc1: ContaCorrente = new ContaCorrente(1, 456, 1, "Espionildo", 500000, 1000);
     contas.cadastrar(cc1);

     const cp1: ContaPoupanca = new ContaPoupanca(2, 123, 2, "Jaca", 1000, 10);
     contas.cadastrar(cp1);



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
                console.log(colors.fg.whitestrong,"\nCriar conta:", colors.reset);

                console.log("Insira o número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Insira o nome do titular da conta: ");
                titular = readlinesync.question("");

                console.log("Informe o tipo da conta: ");
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
                console.log(colors.fg.whitestrong,"\nListar todas as contas",colors.reset);
                contas.listarTodas();
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\nBuscar conta por numero", colors.reset);
                numero = readlinesync.questionInt("Insira o numero da conta: ");
                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\nAtualizar os dados da conta", colors.reset);
                
                console.log("Insira o numero da conta: ");
                numero = readlinesync.questionInt("");
                
                let conta = contas.buscarNoArray(numero);

                if(conta != null){
                    console.log("Insira o numero de agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Insira o nome de titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch(tipo){
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular,saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da conta poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\nApagar conta", colors.reset);
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);
                keyPress();
                break;
            case 6:
                console.log("\nSacar");

                keyPress();
                break;
            case 7:
                console.log("\nDepositar");
                keyPress();
                break;
            case 8:
                console.log("\nTranferir valores entre contas");
                keyPress();
                break;
            case 9:
                console.log("\nSair");
                keyPress();
                break;
            default:
                console.log("\nInsira uma opcao valida\n");
                keyPress();
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