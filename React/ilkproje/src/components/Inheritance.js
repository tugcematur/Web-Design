class Car{

    constructor(name){
        this.brand = name;
    }

    IHave(){
        
       return "I have a" + this.brand;
    }
}
//Inheritance in java
class Model extends Car{
    constructor (name,mdl){
        super(name);// Car sınıfının constructorı
        this.model = mdl;
    }


   BenimVar() {

        return this.IHave() + ", it is a" + this.model
    }
}
const myCar = new Model("Ford","Mustang");
myCar.BenimVar();
//base üst sınıfa işaret eder c# da örneğin =>  super() üst sınıfın constructorına işaret eder.