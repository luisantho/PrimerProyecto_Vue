export class Hero{

    // La exclamación indica que podria ser un undefined
    private _name!:string 
    constructor(_name:string, private _description = ""){

        this.name = _name;
    }

    public get name(){
        return this._name
    }

    public set name (nombre :string) {
        if(nombre.length > 0 && nombre !== undefined){

            this._name = nombre
        } else{
            throw new Error ('Error ')
        }
    }

    public get description () {
        return this._description
    }

    public set description (description :string) {
        this._description = description
    }

    public toString(){
        return `${this.name} - ${this.description}`
    }
}