ESERCIZIO 1:

let input :number = prompt ("inserisci numero")*1;

let max:number = input;

while (input !=-1){

    if (input > max){
        max=input ;

    }
    input = prompt("inserisci un numero");

}

if (max !=-1){

console.log(max);


}

-----------------------------------------------------------------------
ESERCIZIO 2:

let input :number = prompt ("inserisci numero")*1;

let min:number = input;

while (input !=-1){

    if (input <min){
        min=input ;

    }
    input = prompt("inserisci un numero");

}

if (min !=-1){

console.log(min);


}

---------------------------------------------------------------------

ESERCIZIO 3:
let A:number[] = [1,5,20,15,500,230,8,90,66,7,23];

let max:number = A [0];

for ( let i = 0 ; i < A.length ; i++ ){
     if (A[i]>max) {
         max=A[i];
     }
}
console.log(max)

--------------------------------------------------------------------

ESERCIZIO 4:

let input:number = +(prompt("Inserisci numero"));

let max:number = input;

for (let i = 0; i < 9; i++){

   if (input > max){
       max = input;
   }
   input = +prompt("Inserisci numero");

}
console.log(max);

