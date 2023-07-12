// Recomendacion: hacer los modelos con clase
enum State {
    Init,
    FirtsFigure,
    SecondFigure,
    Result

}
export class CalculatorModel {

    private currentState = State.Init
    private firstFigure = 0
    private secondFigure = 0
    private operator = ''
    private result = 0;

    private display = '';

    constructor() { 
        this.display = ''
    }

    hanldeNumber = (num: number):string => {
        switch (this.currentState) {
            case State.Init:
                this.firstFigure = num
                this.currentState = State.FirtsFigure
                this.display = this.firstFigure.toString()

                break;
            case State.FirtsFigure:
                // Esto es para actualizar el primer número
                this.firstFigure = this.firstFigure * 10 + num
                // Aqui solamente pintas el nuevo numero que entra
                this.display += num.toString()
                break;
            case State.SecondFigure:
                this.secondFigure = this.secondFigure * 10 + num
                this.display += num.toString()
                break;
            case State.Result:
                this.firstFigure = num
                this.secondFigure = 0
                this.result = 0
                this.operator = ''
                this.currentState = State.FirtsFigure
                this.display = this.firstFigure.toString()
                break;

                default:
                    break;
        }
        return this.display
    }
    isOperator = (symbol: string) => {
        return symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/'
    }

    readonly resolve = () => {
        switch (this.operator) {
            case '+':
                return this.firstFigure + this.secondFigure

            case '-':
                return this.firstFigure - this.secondFigure
            case '*':
                return this.firstFigure * this.secondFigure
            case '/':
                return this.firstFigure / this.secondFigure
            default:
                return 0
        }

    }


    readonly hanldeSymbol = (symbol: string):string => {

        if (symbol === 'AC') {
            this.firstFigure = 0
            this.secondFigure = 0
            this.result = 0
            this.operator = ''
            this.currentState = State.Init
            this.display = ''
            return this.display

        }
        switch (this.currentState) {
            case State.Init:

                break;
            case State.FirtsFigure:
                if (this.isOperator(symbol)) {
                    this.operator = symbol
                    this.currentState = State.SecondFigure
                    this.display += symbol

                }
                break;
            case State.SecondFigure:
                if (symbol === '=') {
                    this.result = this.resolve()
                    this.display += symbol + this.result.toString()
                    this.currentState = State.Result
                }
                break;

            case State.Result:
                if (this.isOperator(symbol)) {
                    this.operator = symbol
                    this.firstFigure = this.result
                    this.secondFigure = 0
                    this.result = 0
                    this.currentState = State.SecondFigure
                    this.display = this.firstFigure.toString() + this.operator
                }
                break;

            default:
                break;

        }
        return this.display
    }
}