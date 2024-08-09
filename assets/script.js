/*
for ( let i = 5; i <=10; i++){
    console.log(i);
}
const frutas = ["Manzana","Uva","Pera","Naranja"];
for(let i = 0;i < frutas.length; i++){
    console.log(frutas[i]);
}
for (let i= 0; i<= 10; i += 2){
    console.log(i)
}
*/

const CreativeCode= ["Yamileth","Gabriela","Leticia","Danae","Solange"];
let lista="";

for (let i = 0; i < CreativeCode.length; i++) {
    lista += `<li>${CreativeCode[i]}</li>`;
}

document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("lider").innerText = CreativeCode[2];
