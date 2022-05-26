// Verificare se una parola e` palindroma .
// Una parola si dice palindroma se letta al contrario ha lo stesso valore
// es. otto anna ossesso
// Creare un programma che letta in input una parola,
// restituisca true se la parola e` palindroma
// falso se non lo e`.

let stringa:string=prompt("Inserisci una parola");

let stringaInversa=stringa.split('').reverse().join('')

if (stringa==stringaInversa){
    alert("la parola è Palindroma");
}
else {
   alert ("La parola non è Palindroma")
}


console.log(stringaInversa)

-------------------------------------------------------------------------
// Prese in input due parole
// Creare una terza parola, composta dalla prima e dall'inverso della seconda.
// input  : ciao
// input  : pizza
// output : ciaoazzip

let parola:string=prompt("Inserisci una parola");
let parola2:string=prompt("Inserisci seconda parola");

let parola3=parola+parola2.split('').reverse().join('')




console.log(parola3)
----------------------------------------------------------------------------

let parola:string=prompt("Inserisci parola");

let parola2:string=prompt("Inserisci seconda parola");

let array=[]

for(let i=0 ; i!=parola.length; i++){
    if (i%2==0){
        parola.charAt(i)
        array.push(parola[i])
    }
    else{
        parola2.charAt(i);
        array.push(parola2[i])
    }
}

--------------------------------------------------------------------------------

// Prese in input due parole
// Creare una terza parola, composta dalle lettere della prima e della seconda in maniera alternata.
// input  : ciaop
// input  : pizza
// output : ciazp

let parola:string=prompt("Inserisci parola");

let parola2:string=prompt("Inserisci seconda parola");

let parolaElaborata:string="";

for(let i=0 ; i!=parola.length; i++){
    if (i%2==0){
    parolaElaborata=parolaElaborata.concat(parola.charAt(i))
    }
    else{
        parolaElaborata=parolaElaborata.concat(parola2.charAt(i))
    }
}


console.log(parolaElaborata)

