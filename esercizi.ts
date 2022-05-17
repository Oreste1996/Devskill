ESERCIZIO N°36:

let x:number=+prompt("Inserisci un numero X");
let array=[];
let contatore=0;
for (let i=0; i<=9; i++) {
    let k=+prompt("Inserisci un numero");
    array.push(k);
    if (k%x==0) {
       contatore++;
    }
    else {
        array.push(k);
        continue;
    }
}
if (contatore==0) {
    alert("OK");
}
else {
    alert("NO");
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ESERCIZIO N°27:

function input():number{
    return +prompt("INserisci numero");
}

let inputN=input();

let array:number[]=[]

while(inputN!=-1){
    array.push(inputN)
    inputN=input()
}

let n=+prompt("Inserisci un numero N");

let contatore:number = 0

for(let i=0 ; i <array.length ; i++){
    if (array[i] <n || array[i]==n){
contatore++
    }else {
        i=array.length
    }
}
console.log(contatore)
if (contatore<n || contatore==n-1){
    alert("no")
}else {
    alert("ok")
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ESERCIZIO N°32

function inserisciNumeri(){
    return +prompt("Inserisci i numeri");

}

let numeri:number;

numeri=inserisciNumeri()

let array:number[]=[]

let max:number=0;

let min:number=0;

while(numeri !=0 ){
    array.push(numeri);
   numeri=inserisciNumeri()

}

if(array[0]<=array[1]){
    for(let i=0 ; i < array.length ; i++){
    if (array[i+1] > array[i]){
     max++
    }else{
        min++
        
if (array[i+1]==undefined){
    min--
}
    }
}
console.log(max,min)
if(max + min==array.length){
    alert("si");
}else {
    alert("no")
}
}else {
    alert ("no")
}
-------------------------------------------------------------------------------------------------------------------------------------------------------
ESERCIZIO N°7B

function input():number{
    return +prompt("Inserisci numero");
}

let numeri:string=prompt("inserisci X e N");

let xEn=numeri.split(" ",2);

let x=+xEn[0];

let n=+xEn[1];

let array:number[]=[];

for(let i=0 ; i<n ; i++){
    let num=input();
    array.push(num);
}
let risultato:string="";

 for (let j=0 ; j<array.length ; j++){
     if(array[j] <x && array[j]%2==0 ){
     risultato=risultato+array[j]
     }

 }

alert(risultato);