//creer un tableau d'objet
let etudiant = [];
// on recupere les identifiants d'element html
let formulair = document.getElementById("mon-formulaire");
formulair.addEventListener("submit", function(event){

    //methode qui nous permet d'empecher le rechargement par defaut

    event.preventDefault();

    //maintenant on recupere les valeur saisi du formulaire
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;

    if(!nom || !prenom || !adresse){
        alert("remplir tous les champs")
    }

    //on ajoute les valeurs saisis sur le tableau etudiant !!
    etudiant.push({nom:nom, prenom:prenom, adresse:adresse});

    afficher()
    document.getElementById("nom").value="";
     document.getElementById("prenom").value="";
      document.getElementById("adresse").value="";
   

}) 

//creer la fonction qui va nous permettre parcourire la table ou le tableau d'objet
function afficher(){
   const resultat = etudiant.map(function(personne){
      return "<li>" +
                 "👤 " + personne.nom + " " + personne.prenom +
                 " | 📧 " + personne.adresse +
               "</li>";
              
   })
    document.getElementById("liste").innerHTML = resultat.join("")
}
 // console.log("votre nom est:" + " " + nom );
    // console.log("votre prenom est:" + " " + prenom );
    // console.log("votre adresse est:" + " " + adresse );
