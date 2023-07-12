

export class ListaModelo{

    
    private _nombre = ''
    private _cantidad = 0

    constructor(nombre:string, cantidad:number){

        this._nombre = nombre;
        this._cantidad = cantidad
    }

    get nombre() :string {return this._nombre}
    get  cantidad():number {return this._cantidad}


}