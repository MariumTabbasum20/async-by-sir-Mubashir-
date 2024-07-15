function parentFunction(func :() => void ) {  //func->is ChildFunction
    console.log("I am the Parent Function")  //1 execute
    func(); //invoke childfunction
}

function childFunction(){
    console.log("I'm the child function") //2
}

parentFunction(childFunction);  //invokation  
//   agr kisi function kay () ya kisi parameter m ik or function pass kr rahe hein so this is called CALLBACK FUNCTION 