export class Beer {
    private _id!: number
    private _name!: string
    private _tagline!: string
    private _description!: string
    private _imageUrl!: string
    private _abv!: number

    constructor(json: any) {
        this.id = json.id
        this.name = json.name
        this.tagline = json.tagline
        this.description = json.description
        this.imageUrl = json.image_url
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

    get imageUrl(): string {
        return this._imageUrl
    }

    set imageUrl(value: string) {
        this._imageUrl = value
    }

    get abv(): number {
        return this._abv
    }

    set abv(value: number) {
        this._abv = value
    }

}

export const getBeers = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    const data = await response.json();
    const result: Beer[] = [];
    for (const jsonBeer of data) {
        result.push(new Beer(jsonBeer))
    }
    return result;
}