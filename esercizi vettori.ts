Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
i valori dell'array B
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 8, 4 ,10 ,6];


let a:number[]=[];
let b:number[]=[];
let c:number[]=[];
while (a.length<=4 ) {
        let n:number= prompt("Inserisci un numero")*1;
        a.push(n);
}
   while (b.length<=4){
         let k:number= prompt("Inserisci un numero")*1;
        b.push(k);
    }
    
    for (let i=0 ; i<=4 ; i++){
        if (i%2==0){
            c.push(a[i]);
        }
        else {
            c.push(b[i]);
        }
    }
    console.log(c)
-------------------------------------------------------------------------

Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
a M inserite i valori di B al contrario
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];


let a:number[]=[];
let b:number[]=[];
let c:number[]=[];
while (a.length<=4 ) {
        let n:number= prompt("Inserisci un numero")*1;
        a.push(n);
}
   while (b.length<=4){
         let k:number= prompt("Inserisci un numero")*1;
        b.push(k);
    }
    
    for (let i=0 ;i<=4;i++){
        c.push(a[i]);

    }
for (let i=4 ; i>=0 ; i--){
    c.push(b[i])
}
console.log(c)
----------------------------------------------------------------------------------------------------------------------------------------------------------------
