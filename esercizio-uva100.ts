PARTE 1

let input:number=+prompt("Inserisci numero");
let stampa = [];
let numero = input;
let numeroElaborato:number;
stampa.push(input);
while ( numero !=1 ){
    if ( numero% 2==0 ){
        numeroElaborato = numero / 2;
        stampa.push(numeroElaborato);
        numero=numeroElaborato;
    }
    else{
        numeroElaborato=(numero*3)+1;
        stampa.push(numeroElaborato);
        numero=numeroElaborato;
    }
}
console.log(stampa);


-----------------------------------------------------------------------

PARTE 2

let input:number= prompt("Inserisci un numero")*1;
let input2:number= prompt("Inserisci un numero")*1;
let stampa=[];
let contatore:number;
let numeroelaborato:number;
stampa.push(input,input2);
let max=0;
for (let i=input; i<=input2; i++) {
   contatore=0;
   let numero=i;
  while (numero!=1) {
    if (numero%2==0) {
        numeroelaborato=numero/2;
        contatore++;
        numero=numeroelaborato;
    }
        else {
      numeroelaborato= (numero*3)+1;
      contatore++;
       numero=numeroelaborato;
    }
 }
 if (contatore>=max) {
   max=contatore;
 }
}
console.log(stampa,max+1);