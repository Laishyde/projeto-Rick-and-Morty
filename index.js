class calcController {
    constructor() {


        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
       


    }
    initialize() {
       
        

        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

        }, 1000);
    }
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }
    get _displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set _displayCalc(value) {
        return this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date();

    }
    set currentDate(value){
        return this._currentDate = value;
    }
}

