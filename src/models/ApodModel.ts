export  class Apod {

    private _date = '';
    private _explanation= '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion= '';
    private _title = '';
    private _url= '';

    constructor(json: any){
        this.date = json.date;
        this.explanation = json._explanation
        this.date = json.date;
        this.hdurl = json.hdurl;
        this.media_type = json.media_type;
        this.service_version = json.service_version;
        this.title = json.title;
        this.url = json.url;
    }

    get date (): string {
        return this._date
    }

    set date (value:string){
        this._date = value;
    }

    get explanation (): string {
        return this._explanation
    }

    set explanation (value:string){
        this._explanation = value;
    }

    get hdurl (): string {
        return this._hdurl
    }

    set hdurl (value:string){
        this._hdurl = value;
    }

    get media_type (): string {
        return this._mediaType
    }

    set media_type (value:string){
        this._mediaType = value;
    }

    get service_version (): string {
        return this._serviceVersion
    }

    set service_version (value:string){
        this._serviceVersion = value;
    }

    get title (): string {
        return this._title
    }

    set title (value:string){
        this._title = value;
    }

    get url (): string {
        return this._url
    }

    set url (value:string){
        this._url = value;
    }

}

export class ErrorApod{

    private _code = -1
    private _msg = ''

    constructor(code: number, msg = '  '){
        this.code = code
        this.msg = msg
    }

    get code() :number{
        return this._code
    }

    set code (value:number){
        this._code = value
    }

    get msg ():string{
        return this._msg
    }

    set msg (value:string){
        this._msg = value
    }
}

export const getApod = async (date?: string): Promise<ErrorApod | Apod> => {

    let url = 'https://ap.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    if (date !== undefined) {
        url += '&date=' + date
    }
    //Guardar la respuesta en una constante para poder poner condiciones
    const response = await fetch(url)
    if (!response.ok) {
        console.error('Error' + JSON.stringify(response));
        switch (response.status) {
            case 400:
                return new ErrorApod(400, 'Bad request')

            case 500:
                return new ErrorApod(500, 'Internal server error')
            
            case 404:
                return new ErrorApod(404,'Not found')
                
            default:
                break;
        }

    }
    
    const json = await response.json();
    //console.log('json' +JSON.stringify(json))
    return new Apod(json)

}