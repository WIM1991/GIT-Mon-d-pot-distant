// Exercice 3 : recherche d'un prénom
//tableau 
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
//saisi de la fenetre 
                var saisi = window.prompt("Veuillez choisir un prénom : ")
//nombre de serie de chauqe element 
var rang = tab.indexOf(saisi);

console.log (rang)
// condition 
              if (tab.includes(saisi))
              {
                 
                tab.splice(tab.indexOf(saisi),1);
                tab.push('vide');
              console.log(tab);

              }
              else
              { 
                console.log("Erreur");
              }