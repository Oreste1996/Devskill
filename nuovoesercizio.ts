let pesolibre:number = prompt("Inserisci il tuo peso (lbr)");
let altezzapiedi:number = prompt("Inserisci la tua altezza (feet)");
let pesokg:number;
let altezzametri:number;
let bmi:number;
pesokg= pesolibre * 0.45;
altezzametri= altezzapiedi * 0.30;
bmi=pesokg/(altezzametri*altezzametri);
alert("Il tuo BMI corrisponde a: " +bmi);
if (bmi<16.5) { alert ("SOTTOPESO SEVERO!");}
if (bmi>=16.5 && bmi<=18.4 ) { alert ("SOTTOPESO!");}
if (bmi>=18.5 && bmi<=24.9) { alert ("NORMALE!");}
if (bmi>=25 && bmi<=30) { alert ("SOVRAPPESO!");}
if (bmi>=30.1 && bmi<=34.9) { alert ("OBESITA' DI PRIMO GRADO!");}
if (bmi>=35 && bmi<=40) { alert ("OBESITA' DI SECONDO GRADO!");}
if (bmi>=40) { alert ("OBESITA' GRAVE!");}
let s:string = 's';
let n:string = 'n';
let risposta:string = prompt("Vuoi effettuare una misurazione più precisa? Digita (s) per confermare o (n) per declinare");
if (risposta== n) {
     alert("ARRIVEDERCI!");
}
if (risposta== s) {
    let cpolso= prompt("Inserisci circonferenza polso (cm)");
let f:string = 'f';
let m:string = 'm';
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
