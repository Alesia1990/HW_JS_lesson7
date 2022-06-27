const Microwave = function(brand, model){
    

    this.brand = brand;
    this.model = model;
    this.openDoor = false;

    this.status = false;
    this.prog = 0;// w -подогрев, df- разморозка
    this.sec = 0;


    this.open = function(){
        this.openDoor = true;
        if (this.status == true){
        this.off();
        }
    }


    this.programm = function(prog){
        if (prog == "w" || prog == "df"){
                this.prog = prog;
        }
    }

    this.time = function(sec){
        if (isNaN(sec) !== true && sec > 0){ // если ввести нечисло или -
            this.sec = sec;
        }
    }
    this.close = function(){
        this.openDoor = false;
    }

    this.on = function(){
        if(this.prog !== 0 &&  this.openDoor == false){
            this.status = true;
            let self = this;
            setTimeout(function(){
                self.off();
                alert("Работа завершена!");
            }, this.sec * 1000)
        }

    }


    this.off = function(){
        this.status = false;
        this.sec = 0;
        this.prog = 0;
    }


    this.info = function(){
        console.log(`${this.brand} ${this.molel}
        Open door: ${this.openDoor}
        Programm : ${this.prog}
        Time: ${this.sec}
        Status: ${this.status}`);
    }
}
const bosh = new Microwave("Bosh", "DEL582");
console.log(bosh);