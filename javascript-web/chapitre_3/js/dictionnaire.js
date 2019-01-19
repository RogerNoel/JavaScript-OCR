// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// Compléter ce fichier afin de créer un mini-dictionnaire sur la page web. 
// Vous devez utiliser le tableau 'mots' et employer la balise HTML <dl> pour créer ce dictionnaire.
// Chaque mot du dictionnaire doit être mis en valeur : utilisez pour cela la balise HTML <strong>.

console.log(mots);

let contenuElt = document.getElementById('contenu');

// explication 'dl'
//     <dl>
//         <dt>Beast of Bodmin</dt>
//         <dd>A large feline inhabiting Bodmin Moor.</dd>

//         <dt>Morgawr</dt>
//         <dd>A sea serpent.</dd>
//     </dl>

// creation de la liste
let descriptionElt = document.createElement('dl');
//insertion de la liste
contenuElt.appendChild(descriptionElt);

for (let i = 0; i < mots.length; i++){
    // creer strong dt et dd
    let elementElt = document.createElement('dt');
    let definitionElt = document.createElement('dd');
    let strongElt = document.createElement('strong');
    // définition des attributs
    strongElt.textContent = mots[i].terme;
    definitionElt.textContent = mots[i].definition;
    //insertion des éléments
    descriptionElt.appendChild(strongElt);
    descriptionElt.appendChild(elementElt);
    descriptionElt.appendChild(definitionElt);
}

console.log('tests');
//-------------------------------- avec FOREACH sur array: attention SYNTAXE et appel de chaque valeur

mots.forEach(function(element) {
    console.log(element.terme);
    console.log(element.definition);
  });

