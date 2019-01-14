/* Ecrire une fonction qui affiche un noeud enfant d'un objet du DOM
Cette fonction recevra 2 paramètres
    - l'objet du DOM
    - l'indice du noeud enfant
Les cas d'erreurs doivent être gérés */

function afficherEnfant(noeud, indice) {
    let longueurNoeud = noeud.childNodes.length;
    /* console.log(longueurNoeud); */
    if (indice < 0) {
        console.log('indice incorrect (négatif)');
    } else {
        if (indice > longueurNoeud) {
            console.log('indice incorrect (trop haut)');
        } else {
            if (indice === 0) {
                console.log('Type de noeud incorrect');
            } else {
                console.log(noeud.childNodes[indice]);
            }
        }
    }
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);