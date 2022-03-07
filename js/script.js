
var name = document.getElementById("nom");
var name = document.getElementById("prénom");
var name = document.getElementById("date");
var name= document.getElementById("code postal");
var name= document.getElementById("Adresse");
var name= document.getElementById("Ville");
 var name= document.getElementById("email");

var submit = document.getElementById("submit");
submit.addEventListener("click", verif_form);

function verif_form(e) {

  var filtre = new RegExp("^[A-Za-z]+$");
  var resultat = filtre.test(nom.value);
  var filtre1 = new RegExp("^[A-Za-z]+$");
  var resultat1 = filtre1.test(prénom.value);
  // var filtre2 = new RegExp("^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$");
  // var filtre2 = new RegExp("^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$");
  var filtre2 = new RegExp("^\\d{4}[-]\\d{2}[-]\\d{2}$");
  var resultat2 = filtre2.test(date.value);
  var filtre3 = new RegExp("^\\d{5}$");
  var resultat3 = filtre3.test(codepostal.value);
  // ******************************************************  \\s
  var filtre4 = new RegExp("^[a-zA-Z0-9\\s,'-]*$");
  console.log(filtre4);
  var resultat4 = filtre4.test(Adresse.value);
  console.log(Adresse.value);
  var filtre5 = new RegExp("^[A-Za-z]+$");
  var resultat5 = filtre5.test(Ville.value);
  var filtre6 = new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  var resultat6 = filtre6.test(email.value)
/*******************************************************************************
  // var sexe = document.getElementsByName("sexe");
  // console.log(sexe[0].value);

  if (nom.value == "") {
    alert("nom vide!");
    e.preventDefault();
  }

  if (prénom.value == "") {
    alert("prénom vide!");
    e.preventDefault();
  }
  if (date.value == "") {
    alert("date vide!");
    e.preventDefault();
  }
  if (codepostal.value == "") {
    alert("codepostal vide!");
    e.preventDefault();
  }
  if (Ville.value == "") {
    alert(" champs de la ville vide!");
    console.log("toto")
    e.preventDefault();
  }
  if (Adresse.value == "") {
    alert(" champs obligatoire!");
    console.log("Adresse true")
    e.preventDefault();
  }
  if (email.value == "") {
    alert(" email obligatoire!");
    console.log("email true")
    e.preventDefault();
  }
  // NOM : ok
  if (!resultat) {
    alert("nom incorrect");
    e.preventDefault();
  }
  // Prenom : ok
  if (!resultat1) {
    alert("prénom incorrect");
    e.preventDefault();
  }
  //  Date de naissance: ok
  if (!resultat2) {
    // if (date.parse(Date.value)) {
    console.log(filtre2);
    console.log(date.value);
    alert("format incorrect");
    e.preventDefault();
  }
  if (!resultat3) {
    // console.log(codepostal.value);
    // console.log(resultat3);
    console.log(filtre3);

    alert("code postal incorrect");
    e.preventDefault();
  }

*****************************************************************************/
  if (!resultat4) {
    console.log(resultat4);
    alert(" Adresse Incorrect ");
    e.preventDefault();
  }

  if (!resultat5) {
    console.log(resultat5);
    alert(" Ville Incorrect ");
    e.preventDefault();
  }
  if (!resultat6) {
    console.log(resultat6);
    alert(" email Incorrect ");
    console.log(Adresse.value);
    e.preventDefault();
  }

  // console.log("ok");
  // e.preventDefault();
}







