// let btn1 = document.getElementById("btn-1");
// btn1.addEventListener("click",function(){
// let valeur = document.getElementById("zone_text").value;
// let list_parent = document.getElementById("ma-liste")
// if(valeur){
//     let liste = document.createElement("li");
//     liste.style.display ="flex";
//     liste.style.justifyContent = "space-between"
//     let btn2 = document.createElement("button");
//     btn2.innerHTML = "supprimer"
//     btn2.addEventListener("click", function(){
//         liste.remove();
//     })
//     liste.innerHTML = valeur;
//     liste.appendChild(btn2);
//     list_parent.appendChild(liste);

// const { createElement } = require("react");



// }
// })

let btn = document.getElementById("btn-1");
let list_parent = document.getElementById("ma-liste")
btn.addEventListener("click", function(){
let valeur = document.getElementById("zone_text").value;
let valeur2 = document.getElementById("zone_text2").value;
if(valeur && valeur2 >0){
let liste = document.createElement("li");
let span = document.createElement("span");
let span2 = document.createElement("span");
     
            //bouton supprimer
    let btn2 = document.createElement("button");
    btn2.innerHTML = "supprimer"
    btn2.addEventListener("click", function(){
        liste.remove();
    })
    span.innerHTML = valeur+ "   " ;
    span2.innerHTML ="  " + valeur2 + "ans";
    liste.appendChild(span);
    liste.appendChild(span2);
    liste.appendChild(btn2)
    liste.style.display = "flex"
    liste.style.gap = "20px"
    liste.style.justifyContent= "center"
    list_parent.appendChild(liste);
    list_parent.style.gap ="90px"
    
}else{
    alert("remplir les champs du  formulaire");
}
    document.getElementById("zone_text").value = "";
    document.getElementById("zone_text2").value = "";
})

                        ///exercice 2
let btn4 = document.getElementById("btn-3")
btn4.addEventListener("click", function(){
  if(btn4.textContent === "cliquer"){
    btn4.innerHTML = "vous avez clquer"
  }else if(btn4.textContent === "vous avez clquer"){
    btn4.innerHTML = "cliquer"
  }
  
    
})


let btn5 = document.getElementById("btn-4")
btn5.addEventListener("click", function(){
    btn5.style.color= "red"
})

const tableaux = [
    { nom: "Moctar", prenom: "Niang" },
    { nom: "Amadou", prenom: "Diallo" },
    { nom: "Fatou", prenom: "Sow" },
    { nom: "Ibrahima", prenom: "Ba" },
    { nom: "Mariama", prenom: "Diop" }
];
let liste = document.getElementById("liste")
tableaux.forEach(function(personne,index){
    let li = document.createElement("li");
    li.textContent = [index] + "-" + personne.nom + " " + personne.prenom
    li.style.color= "red"
    li.style.fontSize= "30px"
    li.style.fontWeight= "bold"
    li.style.listStyle="none"
    li.style.cursor= "pointer"

    li.addEventListener("click", function(){
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none";
            
        }else
        
        li.style.textDecoration= "line-through"
       
    });
    liste.appendChild(li);
})
//  function pluplus(){
//     let ajouter = 0;
//     return ajouter ++;
//  }
// let plus = document.getElementById("plus");
// plus.style.cursor= "pointer"

// plus.addEventListener("click",pluplus())

