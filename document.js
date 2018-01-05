// Es calcula el segle
function A(any){
    var coeficientSegle;
    
    if (any >= 1700 && any <= 1799){
        coeficientSegle = 5;
        
        
    }else if (any >= 1800 && any <= 1899){
        coeficientSegle = 3;
        
        
    }else if (any >= 1900 && any <= 1999){
        coeficientSegle = 1;
        
    }else if (any >= 2000 && any <= 2099){
        coeficientSegle = 0;
        
        
    }else if (any >= 2100 && any <= 2199){
        coeficientSegle = -2;
        
    }else if (any >=2200 && any <= 2299){
        coeficientSegle = -4;
        
    }
    return coeficientSegle;
}
//Es calcula l'any. Es tenen en compte els darrers dos dígits de l'any introduït.
//Per això ho passem a string i tenim en compte els dos darrers caràcters. El resultat es divideix en 4 i no es tenen en compte els decimals. 
function B(any){
    any = any.toString();
    var a = parseInt(any.substr(-2));
    var b = Math.floor(a/4);
    coeficientAny = a+b;
    return coeficientAny;
}
//Es calcula si l'any es traspàs o no. Si el resultat de l'operació és 0 no ho és. Si és -1 sí.
function C(any, mes){
    var coeficienTraspas;
    var numMes;
    var anyTraspas;
    var multipleDe4 = (any % 4 == 0)
    var multipleDe100 = (any % 100 == 0)
    var multipleDe400 = (any % 400 == 0)
    //Si els dos darrers nombres són múltiples de 4 i no són múltiples de 100 o són múltiples de 400 ho consideram any trapàs. 
    //Per això fem servir una booleana. 
    
    if (multipleDe4 && (!multipleDe100 || multipleDe400) ){
        anyTraspas = true;
    }else{
        anyTraspas = false;
    }
    //A més, també es tenen en compte els mesos (gener i febrer)
    if (mes == (1 || 01)){
        numMes=1;
    } else if (mes == (2 || 02)){
        numMes=2;
    }
    if (anyTraspas && (numMes==1 || numMes==2)){
        coeficienTraspas = -1;
    } else {
        coeficienTraspas = 0;
    }
    return coeficienTraspas;
}
//Aquí es calculen els mesos. Cada mes té un nombre assignat (coeficient).
function D(mes){
    var coeficientMes = mes;
    if (mes == (1 || 01)){
        coeficientMes = 6;
    }else if(mes ==(2 || 02)){
        coeficientMes = 2;
    }else if(mes == (3 || 03)){
        coeficientMes = 2;
    }else if(mes == (4 || 04)){
        coeficientMes = 5;
    }else if(mes == (5 || 05)){
        coeficientMes = 0;
    }else if(mes == (6 || 06 )){
        coeficientMes = 3;
    }else if(mes ==(7 || 07)){
        coeficientMes = 5;
    }else if(mes == (8 || 08)){
        coeficientMes = 1;
    }else if(mes == (9 || 09)){
        coeficientMes = 4;
    }else if(mes == (10)){
        coeficientMes = 6;
    }else if(mes == (11)){
        coeficientMes = 2;
    }else if(mes == (12)){
        coeficientMes = 4;
    }
    
    return coeficientMes;
    
}
//Aquí simplement es té en compte el dia introduït. El nombre introduït serà difrectament el coeficient per a calcular l'algoritme. 
function E(dia){
    var coeficientDia = dia;
    return coeficientDia;
}
//Es calcula el resultat. Es sumen tots els coeficients calculats anteriorment. Amb el resultat feim un mod7. 
function resultat(dia, mes, any){
    
    var coeficients = A(any) + B(any) + C(any,mes) + D(mes) + E(dia);
    
    var resultat = coeficients;
    
    return resultat%7;
}