
function posneg (numero:number):string{
    if (numero>=0){
        return "Positivo";

    }
        return "Negativo";
    
}

let input:number=prompt("Inserisci il numero")*1;


console.log(posneg(input));

------------------------------------------------------



function primo (nome:string , cognome:string):string{
    let nomecompleto:string = nome+ " " +cognome;
    return console.log(nomecompleto.toUpperCase());
}

let input1:string=prompt("Inserisci il tuo nome");

let input2:string=prompt("Inserisci il tuo cognome");

primo(input1,input2);



function primo (nome:string , cognome:string):string{
    let nomecompleto:string = nome+ " " +cognome;
    return console.log(nomecompleto.toLocaleLowerCase());
}

let input1:string=prompt("Inserisci il tuo nome");

let input2:string=prompt("Inserisci il tuo cognome");

primo(input1,input2);


----------------------------------------------------------

function convertitore() {
    pesokg=pesolibre*0.45;
    altezzametri=altezzapiedi*0.30;
}
function bmiCal() { bmi=pesokg/(altezzametri*altezzametri);
                          alert("Il tuo BMI corrisponde a: " +bmi);
    if (bmi<16.5) { alert ("SOTTOPESO SEVERO!");}
if (bmi>=16.5 && bmi<=18.4 ) { alert ("SOTTOPESO!");}
if (bmi>=18.5 && bmi<=24.9) { alert ("NORMALE!");}
if (bmi>=25 && bmi<=30) { alert ("SOVRAPPESO!");}
if (bmi>=30.1 && bmi<=34.9) { alert ("OBESITA' DI PRIMO GRADO!");}
if (bmi>=35 && bmi<=40) { alert ("OBESITA' DI SECONDO GRADO!");}
if (bmi>=40) { alert ("OBESITA' GRAVE!");}
}
function controlloPrompt(){
        let risposta:string= prompt("Vuoi effettuare una misurazione più precisa? Digita (s) per confermare o (n) per declinare");
        if (risposta== n) {
                             return false;
        }
        else if (risposta== s) {
                             return true;
        }
        else   {
              controlloPrompt();
        }
}
function maschioFemmina() {
                              let cpolso:number = prompt("Inserisci circonferenza polso (cm)");
                              let rispostasesso:string= prompt("Inserisci il sesso m/f");
      if (rispostasesso == f) {     if (cpolso<15) {alert("ESILE");}
                                    if (cpolso>=15 && cpolso <=16) {alert("NORMALE");}
                                    if (cpolso>16) {alert("ROBUSTA");}
       }
      if (rispostasesso == m) {     if (cpolso<17) {alert("ESILE");}
                                  if (cpolso>=17 && cpolso <=18) {alert("NORMALE");}
                                  if (cpolso>18) {alert("ROBUSTO");}
       }
}
let pesokg:number;
let altezzametri:number;
let bmi:number;
let s:string = 's';
let n:string = 'n';
let f:string = 'f';
let m:string = 'm';
let pesolibre:number = prompt("Inserisci il tuo peso (lbr)");
let altezzapiedi:number = prompt("Inserisci la tua altezza (feet)");
convertitore();
bmiCal();
let controllo:boolean = controlloPrompt();
if (controllo==true) {
maschioFemmina();
}
else { alert("ARRIVEDERCI!");
}

--------------------------------------------------------------------------------------

function bisestile() {
    if (anno%400 ==0 || anno%4 ==0 && anno%100 !=0) {
        alert("L'anno inserito è BISESTILE");
    }
    else {
        alert("L'anno inserito NON è BISESTILE");
    }
}
let anno:number= prompt("Inserisci un anno qualsiasi");
bisestile();

----------------------------------------------------------------------------------------

function paridispari() {
    if (numero%2 ==0) {
        alert("Il numero inserito è PARI");
    }
    else {
        alert("Il numero inserito è DISPARI");
    }
}
let numero:number= prompt("Inserisci un numero qualsiasi");
paridispari();
