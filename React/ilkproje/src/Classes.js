
//Visual studio code içinde methodların başına function yazmasak da algılıyor ama konsolu kullanacaksak yazmalıyız
class Car{


    constructor(name){
        this.brand = name
    }

    IHave(model){
        
        var satir1 = "I have a " + this.brand+ " " + model;
        var satir2 = 'I have a ' + this.brand + " " + model;
        var satir3 =`I have a ${this.brand} ${model} `;

        console.log(satir1 + "\n"+ satir2 + "\n" + satir3);
    }
}

const myCar = new Car("Ford");
myCar.IHave("Focus");



