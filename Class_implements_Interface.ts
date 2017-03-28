interface iUser <T> {   //Defines an interface iUser 
    param: T;           //Define a property o the type T
}

class User <T> implements iUser <T> {   //Class User implements interface iUser with the property param defined
    param : T ;               
    getParam (param:T) : void {         //getParam method returns void and logs the value of param
    console.log(param);
    }
}

let stringParam = new User <string>();   // creates a new instance of the User with string type
stringParam.getParam("Acadgild");   

let numberParam = new User <number>();   // creates a new instance of the User with number type
numberParam.getParam(28);