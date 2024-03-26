import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main(){

    let opcao: number;

    while(true){
        
        console.log(colors.bg.black, colors.fg.magenta,
            "\n\n.-~*´¨`*·~-.¸_Branco do Basil_,.-~*´¨`*·~-.\n\n");
        console.log("1:Criar conta::::::::::::::::::::::::::๑۩۩๑");
        console.log("2:Listar todas as contas:::::::::::::::๑۩۩๑");
        console.log("3:Buscar conta por numero::::::::::::::๑۩۩๑");
        console.log("4:Atualizar dados da conta:::::::::::::๑۩۩๑");
        console.log("5:Apagar conta:::::::::::::::::::::::::๑۩۩๑");
        console.log("6:Sacar::::::::::::::::::::::::::::::::๑۩۩๑");
        console.log("7:Depositar::::::::::::::::::::::::::::๑۩۩๑");
        console.log("8:Tranferir valores entre contas:::::::๑۩۩๑");
        console.log("9:Sair:::::::::::::::::::::::::::::::::๑۩۩๑");
        console.log(" ", colors.reset);

        opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        if( opcao == 9 ){
            process.exit(0)   
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nCriar conta",colors.reset);
                    keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar todas as contas",colors.reset);
                    keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\nBuscar conta por numero",colors.reset);
                    keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\nAtualizar dados da conta",colors.reset);
                    keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\nApagar conta",colors.reset);
                    keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\nSacar",colors.reset);
                    keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\nDepositar",colors.reset);
                    keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\nTranferir valores entre contas",colors.reset);
                    keyPress()
                break;
            case 9:
                console.log(colors.fg.whitestrong,
                    "\nSair",colors.reset);
                    keyPress()
                break;
            default:
                console.log(colors.fg.red,
                    "\nInsira uma opcao valida\n",colors.reset);
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