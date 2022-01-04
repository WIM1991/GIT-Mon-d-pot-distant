//Exercice 3 : Table de multiplication :
//function table_de_multiplication () 

console.log("Table de multiplication ");
console.log("========================");

function TableMultiplication (number) {
for (i=0; i<=10; i++){
       resultat = number* i;

      console.log("le résultat de " +number+  "x"  +i+ " = " +resultat);
  }

// instructions exécutées après le for (i vaut 10)
//console.log("fin de la boucle");

return resultat ;
} 