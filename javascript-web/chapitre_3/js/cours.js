document.getElementById('langages').innerHTML += '<li id="c">C</li>';
// document.getElementById('java').innerHTML = "";

// ---------------------------------> ça supprime le texte de l'élément mais pas l'élément lui-même !!

// document.getElementById('langages').innerHTML = "";


// document.getElementById('langages').innerHTML += 'de programmation';
// ----------------------> a ajouté le simple texte dans la balise UL mais brut, sans LI ----------


document.querySelector('h1').innerHTML += ' de' ;
document.querySelector('h1').textContent += ' programmation';

document.querySelector('h1').setAttribute('id', 'titre');
// -------------------------------> ajoute un ID de valeur 'titre'

document.querySelector('h1').setAttribute('class', 'prout');
// -----------------------------------> TRANSFORME la classe en 'prout'

document.querySelector('h1').id = 'pwet';


// document.querySelector('h1').id = '';  
// ------------>    !!!!!!!!!!!!!! ne supprime pas la balise ID

var titreElt = document.querySelector('h1');
titreElt.classList.remove('prout');  /* enlève aussi la balise et pas seulement le texte */
titreElt.classList.add('titre');

// CREATION D'UN NOUVEL ELEMENT : a) création b) définition c) insertion

/* a */ var pythonElt = document.createElement('li');
/* b */ pythonElt.id = 'python';
        pythonElt.textContent = 'Python';
/* c */ document.getElementById('langages').appendChild(pythonElt);

/* a */ const rubyElt = document.createElement('li');
/* b */ rubyElt.id = 'ruby';
        /* autre manière */ rubyElt.appendChild(document.createTextNode('Ruby'));
/* c */ document.getElementById('langages').appendChild(rubyElt);

const perlElt = document.createElement('li');
perlElt.id = 'perl';
perlElt.textContent = 'Perl';
/* récupération de l'élément parent et insertion avant un élément donné */
document.getElementById('langages').insertBefore(perlElt, document.getElementById('php'));


// document.getElementById('langages').insertAdjacentHTML("beforeBegin", '<li id="javascript">JavaScript beforebegin</li>');
// /* créé un li avant le UL */

// document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript afterbegin</li>');
// /* créé un li en 1° position de UL */

// document.getElementById('langages').insertAdjacentHTML("beforeEnd", '<li id="javascript">JavaScript beforeEnd </li>');
// /* créé un li à la fin de la liste UL */

// document.getElementById('langages').insertAdjacentHTML("afterEnd", '<li id="javascript">JavaScript afterEnd </li>');
// créé un li après la fermeture de UL 

// REMPLACER OU SUPPRIMER UN NOEUD

const bashElt = document.createElement('li');
bashElt.id = 'bash';
bashElt.textContent = 'Bash';
document.getElementById('langages').replaceChild(bashElt, document.getElementById('perl'));

document.getElementById('langages').removeChild(document.getElementById('bash'));

/* ------------------------- EXERCICE ----------------------- */

// Modifiez le fichier cours.js afin d'ajouter sous la liste des langages un paragraphe contenant un lien vers l'URL suivante : https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation. 


// création des deux éléments:
const nouveauParagraphe = document.createElement('p');
const lienWiki = document.createElement('a');

// création de l'attribut href
lienWiki.setAttribute('href', 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation');
// autre possibilité: lienWiki.href = ' ...';

// création du texte du lien
lienWiki.textContent = 'liste';

// construction de la ligne
nouveauParagraphe.appendChild(document.createTextNode('En voici une '));
nouveauParagraphe.appendChild(lienWiki);
nouveauParagraphe.appendChild(document.createTextNode(' plus complète.'));

// insertion de la ligne
document.getElementById('contenu').appendChild(nouveauParagraphe);