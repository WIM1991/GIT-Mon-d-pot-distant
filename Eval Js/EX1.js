// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
// jeune :
var j=0;
var a=0;
var v=0;
var personnes;

//demander les âges successifs
do {
personnes = window.prompt("Entrez votre age");

if ((personnes <20 )){
 j=j+1;
 console.log(personnes);
 console.log("je suis jeune");
 }
 else if  ((personnes>=40 ))
{
 v=v+1;
console.log(personnes);
console.log("je suis vieux");

}

else if ((personnes>=20 &&  personnes<=40))
{
 a=a+1;
console.log(personnes);
console.log("je suis adulte");

}

      }
  while (personnes < 100);
console.log("fin de la boucle");
   
window.alert("Nombre de jeunes: "+""+ j + " jeunes\n "+"Nombre d'adultes : " + a + " adultes\n "+"Nombre de vieux : "+ ""+ v + " vieux\n"+ " dont "+ " 1 " + "" + " centenaire ");


