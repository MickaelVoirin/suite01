/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.prototype.split
*/

const splitStr = (str, occurence) => {

  let long = str.length;
  let mot = '';
  const tab = [];
  let compt = 0;
  for (let i = 0; i <= long; i++) {
    if(str[i] != occurence && i != long){
      mot += str[i];
    } else {
      tab[compt] = mot;
      compt++;
      mot = ''; 
    }
  }
  return tab;
}

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
splitStr("06-20-42-18-54", "-");

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}
