// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr", "http://moncanard.zimbabwe"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

// 'journaux' est un tableau; on peut donc le parcourir via une boucle

for (var i = 0; i < journaux.length; i++) {
    console.log(journaux[i]);
}

const contenu = document.getElementById('contenu');

// contenu html à insérer
// <ul>
//     <li></li> * journaux.length
// </ul>

var test = '';
test.textContent = (journaux[1]);

let liste = document.createElement('ul');
contenu.appendChild(liste);

for(var j = 0; j < journaux.length; j++){
    // à l'intérieur de UL, pour chaque élément du tableau, ajouter un li contenant l'élément du tableau
    // création des éléments
    let item = document.createElement('li');
    let lien = document.createElement('a');
    // insertion des 'a' dans les 'li'
    item.appendChild(lien);
    // définition des attributs href
    lien.setAttribute('href', journaux[j]);
    // insertion du texte des liens
    lien.textContent = (journaux[j]);
    // insertion des 'li' dans 'ul'
    liste.appendChild(item);
    
}