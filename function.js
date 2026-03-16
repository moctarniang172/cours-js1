
// creer des fonctios pour notre projet de calculatrice 
// 1-fonction pour addition
function addition(nombre1,nombre2){
    return nombre1 + nombre2;
}
//2 function pour sustraction 
function sustraction(nombre1,nombre2){
    return nombre1 - nombre2;
}

//3 function pour multiplication
function multiplication(nombre1,nombre2){
    return nombre1 * nombre2;
}

//4 function pour division
function division(nombre1,nombre2){
    return nombre1 / nombre2;
}

//5 function pour le modulo
function modulo(nombre1,nombre2){
    return nombre1 % nombre2;
}
//function pour calculer une operation
function operteurs (nombre1,nombre2,operateur){
    switch(operateur){
        case "+":
            return addition(nombre1,nombre2);
        case "-":
            return sustraction(nombre1,nombre2);
        case "*":
            return multiplication(nombre1,nombre2);
        case "/":
            return division(nombre1,nombre2);
        case "%":
            return modulo(nombre1,nombre2);
        default:
            return "operateur non valide";
    }


}
var resultat = operteurs(5, 10,"*");
console.log(resultat);
