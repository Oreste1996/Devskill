function kmMiglia(distanza:number):number{
    return distanza * 1.609;
}
function migliaKm(distanza:number):number{
    return distanza / 1.609;
}
function centFar(temperatura:number):number{
    return ((9/5) * temperatura)+32;
}
function farCent(temperatura:number):number{
    return (temperatura - 32) * (5/9);
}
function stampaDistanza(risultato1:number):void{
    return console.log(" " + risultato1);
}
function stampaTemperatura(risultato2:number):void{
    return console.log(" " + risultato2);
}
let input1:string = prompt ("Scegli se convertire una distanza o una temperatura");
if (input1 == "distanza"){
    let input2:string = prompt ("Scegli se convertire da Km/Mi o da Mi/Km");
if (input2 == "Km/Mi"){
    let distanza: number = prompt ("Inserisci la distanza da converitre") * 1;
    stampaDistanza(kmMiglia(distanza));
}   else if (input2 == "Mi/Km") {
    let distanza:number = prompt ("Inserisci la distanza da converitre") * 1;
    stampaDistanza(migliaKm(distanza));
}
}else if (input1 == "temperatura"){
    let input2:string = prompt ("Scegli se convertire da C/F o da F/C");
if (input2 == "C/F"){
    let temperatura:number = prompt ("Inserisci la temperatura da converitre") * 1;
    stampaTemperatura(centFar(temperatura));
}else if (input2 == "F/C"){
    let temperatura:number = prompt ("Inserisci la temperatura da converitre") * 1;
    stampaTemperatura(farCent(temperatura));
}
}

