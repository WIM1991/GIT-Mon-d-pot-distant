
   
   //attribuer les valeurs :
       a=12;
       b=15;
       c= a+b;

     // affichage et attribution de la valeur de c  
     alert(" afficher c ! : "+c );
   // concaténer concaténation
   
   var num = 1 ;
   var prenom = "Jean" ;
   
   alert("mon num vaut :"+num);
   
   alert(prenom);//

////////////////////////table de multiplication ////////////////////////////////////////////////////////////////////////////////////////////
                 const number = parseInt(prompt('Entrez un nombre: '));

                 // TableMultiplication
                 for(let i = 0; i <= 10; i++) {

                     // la multiplication i avec un nombre 
                     const result = i * number;

                     //affivhage du résultat 
                     console.log(`Table de multiplication par`);
                     console.log(`${number} * ${i} = ${result}`);
                     console.log(+result);
                 }

//////////////////////////////////////////test EX2/////////////////////////////////
                 var rang = tab.indexOf(saisi);
                 console.log('rang : ',+rang);
                last = tab.pop(saisi);
  // Dernier Element supprime
                console.log(last)
                delete tab[1];
                console.log(tab);
                 var ele = tab.splice(0,2);
               console.log(tab);
               var nb = tab.push('""');
               console.log(tab);
 //////////////////////////////////////////test EX2/////////////////////////////////
 //tableau 
 var tab = ["pomme", "poire", "banane", "framboise", "abricot"];
 //saisi de la fenetre 
                 var saisi = window.prompt("Veuillez choisir un fruit : ")
 //nombre de serie de chauqe element 
 var rang = tab.indexOf(saisi);

 console.log (rang)
 // condition 
               if (tab.includes(saisi))
               {
                  
                 tab.splice(tab.indexOf(saisi),1);
                 tab.push('toto');
               console.log(tab);
 
               }
               else
               { 
                 console.log("Erreur");
               }
    //////////////////////////////////////////test EX2/////////////////////////////////
//Exercice 2 : Table de multiplication :
//function table_de_multiplication () 

console.log("Table de multiplication ");
console.log("=============================");

//let number = parseInt(prompt("Entrez un nombre :"))

function TableMultiplication (number) 
{
for (i=0; i<=10; i++)

{
       resultat = number* i;

      console.log("le résultat de " +number+  "x"  +i+ " = " +resultat);
  
}

// instructions exécutées après le for (i vaut 10)

//console.log("fin de la boucle");
return resultat ;
} 


// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
// jeune :
var j;
var a;
var v;
var personnes;
//demander les âges successifs
do {
personnes = window.prompt("Entrez votre age");

if ((personnes <20 )){
j=j+1;
console.log(j);
console.log("je suis jeune");
}
else if (((personnes >=20 && personnes <=40)))
{
a=a+1;
console.log(a);
console.log("je suis adulte");
}
else  ((personnes >=40 && personnes <=100));
{
 v=v+1;
console.log(v);
console.log("je suis vieux");
}
   }

while (personnes < 100);
console.log("fin de la boucle");
   
//window.alert("Il y a" + j + " jeunes\n " + "Il y a " + "" + a + "adulte\n " + "  Il y a " + v + "vieux\n " + " dont "+ " 1 " + " centenaire ");

