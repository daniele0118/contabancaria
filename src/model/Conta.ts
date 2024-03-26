export class Conta{
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;


	constructor(numero: number, agencia: number, tipo: number, $titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = $titular;
		this._saldo = saldo;
	}


    /**
     * Getter numero
     * @return {number}
     */
	public get_numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get_agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get_tipo(): number {
		return this._tipo;
	}

    /**
     * Getter $titular
     * @return {string}
     */
	public get_titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get_saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set_numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set_agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set_tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter $titular
     * @param {string} value
     */
	public set $titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set_saldo(value: number) {
		this._saldo = value;
	}


    public sacar(valor: number): boolean{
        if(this._saldo >= valor){
            this.set_saldo(this._saldo - valor)
            return true;
        }

        console.log("Saldo e insuficiente!");
        return false;
    }

    public depositar(valor: number): void{
        let tipo: string = "";

    }

    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta corrente";
                break;
            case 2:
                tipo = "Conta poupanca";
                break;
        }

        console.log("***************");
        console.log("Dados da conta");
        console.log("***************");
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`numero da agencia: ${this._agencia}`);
        console.log(`Tipo da conta ${tipo}`);
        console.log(`Titular da conta: ${this._titular}`);
        console.log(`Saldo a conta: ${this._saldo}`);

    }    

}