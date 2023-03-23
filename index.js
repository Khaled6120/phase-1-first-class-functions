function receivesAFunction(callback) {
    callback(); 
}
function returnsANamedFunction (){

    return function sayHi(){}
}

function returnsAnAnonymousFunction(){

    return ()=>{}
}