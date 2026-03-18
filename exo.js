//creer un tableau d'objet
let etudiant = [];
// on recupere les identifiants d'element html
let formulair = document.getElementById("mon-formulaire");
formulair.addEventListener("submit", function(event){

    //methode qui nous permet d'empecher le rechargement par defaut

    event.preventDefault();

    //maintenant on recupere les valeur saisi du formulaire
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let adresse = document.getElementById("adresse").value.trim();

    if(!nom || !prenom || !adresse){
        alert("remplir tous les champs")
    }

    //on ajoute les valeurs saisis sur le tableau etudiant !!
    etudiant.push({nom:nom, prenom:prenom, adresse:adresse});
    alert("ajoutement avec succee");

    afficher()
    document.getElementById("nom").value="";
     document.getElementById("prenom").value="";
      document.getElementById("adresse").value="";
   

}) 

//creer la fonction qui va nous permettre parcourire la table ou le tableau d'objet
function afficher(){
   const resultat = etudiant.map(function(personne,index){
      return ` 
         <tr>
            <td class="">${index + 1}</td>
            <td>
              <div class="text-2xl">
               <span><i class="fa-solid fa-circle-user"></i></span>
                <span class="nom-text">${personne.nom}</span>
                
              </div>
            </td>
            <td>${personne.prenom}</td>
            <td><span><i class="fa-solid fa-map-pin"></i> ${personne.adresse}</span></td>
            <td>
               <i class="fa-solid fa-basket-shopping cursor-pointer"></i> <button onclick="supprimer(${index})" class="bg-red-500">
               suprimer
              </button>
            </td>
          </tr>
        `;
      
              
   })
    document.getElementById("liste").innerHTML = resultat.join("")
}
//creation d'un bouton pour supprimner
 function supprimer(index){
    etudiant.splice(index,1);
     afficher(); 
 }


 // console.log("votre nom est:" + " " + nom );
    // console.log("votre prenom est:" + " " + prenom );
    // console.log("votre adresse est:" + " " + adresse );
    // <li class="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:bg-gray-50 transition"> +
    //              "👤 " + personne.nom + " " + personne.prenom +
    //              " | 📧 " + personne.adresse +
    //              "<button onclick='supprimer("+ index +")'>supprimer</button>"
    //            </li>

//      <thead>
//     <tr>
//       <th>nom</th>
//       <th>prenom</th>
//       <th>adresse</th>
//       <th>Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>${personne.nom}</td>
//       <td>${personne.prenom}</td>
//       <td>${personne.adresse}</td>
//       <td><button onclick="supprimer(${index})"></button></td>
//     </tr>
//   </tbody>
// </table>
 // <div class="avatar">${initiale}</div>
