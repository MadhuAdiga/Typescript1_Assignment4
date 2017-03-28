class genericClass <T> {                // genericClass takes in a parameter of type T
    genericName : T ;                   // Defines a property of type T
    setName (newName :T) :void {        // setName method takes in a name of type T and assigns the value to the genericName property
         this.genericName=newName;
    };
    getName () : void {                //getName method return void and logs the value of genericName
        console.log(this.genericName);
    };
}
let myGenerics1 = new genericClass<string>();   // creates a new instance of the genericClass with string type
myGenerics1.setName("Acadgild");                // call setName with the parameter string "Acadgild"
myGenerics1.getName();                          // logs Acadgild

let myGenerics2 = new genericClass<number>();   // creates a new instance of the genericClass with number type
myGenerics2.setName(28);                        // call setName with the parameter 28
myGenerics2.getName();                          // logs 28

let myGenerics3 = new genericClass<boolean>();  // creates a new instance of the genericClass with Boolean type
myGenerics3.setName(true);                      // call setName with the parameter true
myGenerics3.getName();                          // logs true



