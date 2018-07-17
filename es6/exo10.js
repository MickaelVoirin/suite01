/*
  Entraînement Crypto

  Votre mission si vous l'acceptez est de décrypter la liste suivante.
  Elle contient des informations précieuses sur une certaine liste de personnes...
  A vous de trouver comment décrypter cette liste!

  BONUS : Une fois votre algorithme fait, décryptez aussi la phrase suivante : 
  const bonus = "37-611-23-911-79-511-23-601-711-511-611-23-79-23-211-411-79-011-701-23-89-411-111";

  BONNE CHANCE !!
*/


const DecrypteMot2 = (str) => {
  let mot = str.split('-');
  let n;
  for(let i in mot){
    n = '';
    for(let j = mot[i].length - 1; j >=0; j--){
      n += mot[i].charAt(j);
    }
    mot[i] = n;  
  } 
  return mot.map(a => {return String.fromCharCode(parseFloat(a))}).join('');

}

const DecrypteLists = (tabObj) => {
  //tabObj.map(a => {console.log('YOUHOU', a.list)});
  return tabObj.map(a => {return a.list.map(b => { return DecrypteMot2(b)} ) });

}



const groupes = [{
    list: [
        '56-901-101-801-501-101',
        '76-79-411-111-801-501-011-101',
        '67-711-001-911-501-301',
        '08-501-101-411-411-501-99-701',
        '66-101-011-601-79-901-501-011',
        '47-711-801-501-101-011'
    ]
}, {
    list: [
        '96-511-611-101-801-801-101',
        '77-79-121-801-501-511',
        '28-79-001-111',
        '97-411-401-79-011',
        '76-101-001-411-501-99',
        '76-121-411-501-801'
    ]
}, {
    list: [
        '76-111-411-79-801-501-101',
        '77-79-411-501-111-011',
        '47-101-411-101-901-121',
        '38-501-901-111-011',
        '77-79-99-111',
        '67-111-501-99'
    ]
}, {
    list: [
        '07-79-011-011-121',
        '77-79-411-99',
        '48-401-501-89-79-711-801-611',
        '07-411-101-001-101-411-501-99',
        '68-79-801-101-011-611-501-011',
        '38-611-101-211-401-79-011-101'
    ]
}];

console.log( DecrypteLists(groupes) );
console.log(DecrypteMot2('37-611-23-911-79-511-23-601-711-511-611-23-79-23-211-411-79-011-701-23-89-411-111'));