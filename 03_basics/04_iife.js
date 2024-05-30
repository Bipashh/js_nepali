// Immediatelu Invoked Function Expressions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`)
})();

//global scope gives problem somtimes so To remove global pollution we use iife

( (NAME) => {
    console.log(`DB CONNECTED TWO ${NAME}`)
}) ("Bipash")