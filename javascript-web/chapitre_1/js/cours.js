if (document.body.nodeType === document.ELEMENT_NODE) /* si le type de noeud est Element (html) */ {
    console.log('Body est un noeud de type élément');
} else {
    console.log('Body est un noeud de type texte');
}

let h = document.head;
console.log(h);

let b = document.body;
console.log(b);

console.log('Le premier noeud est un noeud de type texte');
console.log(document.body.childNodes[0]);

console.log('Le premier noeud de type élément porte l\'index 1');
console.log(document.body.childNodes[1]);

console.log('Boucle for pour parcourir les noeuds de l\'élément body');
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

console.log('Accéder au parent d\'un noeud');
var h1 = document.body.childNodes[1]; /* on accède au second noeud qui est un H1 */
console.log(h1.parentNode);