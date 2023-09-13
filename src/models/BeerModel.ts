export class Beer {
    private _id = 0
    private _name = ''
    private _tagline = ''
    private _description = ''
    private _image_url = ''
    private _abv = 0

    constructor(json: any) {
        this.id = json.id
        this.name = json.name
        this.tagline = json.tagline
        this.description = json.description
        this.image_url = json.image_url
        this.abv = json.abv
    }

    get id(): number {
        return this._id
    }

    set id(value: number) {
        this._id = value
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get tagline(): string {
        return this._tagline
    }

    set tagline(value: string) {
        this._tagline = value
    }

    get description(): string {
        return this._description
    }

    set description(value: string) {
        this._description = value
    }

    get image_url(): string {
        return this._image_url
    }

    set image_url(value: string) {
        this._image_url = value
    }

    get abv(): number {
        return this._abv
    }

    set abv(value: number) {
        this._abv = value
    }

}

export class ErrorBeer {

    private _code = -1
    private _msg = ''

    constructor(code: number, msg = '  ') {
        this.code = code
        this.msg = msg
    }

    get code(): number {
        return this._code
    }

    set code(value: number) {
        this._code = value
    }

    get msg(): string {
        return this._msg
    }

    set msg(value: string) {
        this._msg = value
    }
}

// async: no bloquea la ejecución del programa mientras realiza una tarea que puede llevar tiempo
export const getBeer = async (): Promise <Beer | ErrorBeer> => {

    const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'

    //await: pausa la ejecución de la función hasta que se resuelva la promesa
    const response = await fetch(url)
    if (!response.ok) {
        console.error('Error' + JSON.stringify(response));
        switch (response.status) {

            case 404:
                return new ErrorBeer(404, 'Page not found')
            case 400:
                return new ErrorBeer(400, 'Bad Request')
            case 500:
                return new ErrorBeer(500, 'Internal server error')

            default:
                break;
        }

        
    }
    const json = await response.json()
    
    return new Beer(json)

}