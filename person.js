class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

intro(){
    console.log('my name is '+this.name +' and i am '+this.age+' yrs old.');
}

}

module.exports=Person;