// Dans ce fichier, créez une fonction infosLiens qui doit afficher :
//     - le nombre total de liens dans la page web ;
//     - la cible du premier et du dernier lien.
//     - Cette fonction doit afficher un résultat correct quel que soit le nombre de liens présents dans la page. 

function infosLiens() {
    const liens = document.getElementsByTagName('a');

    if (liens.length > 0) {
        console.log(liens.length);
        console.log(document.querySelector('a').getAttribute('href'));
        // console.log (liens[liens.length-1]).getAttribute('href') ;
        const lastElement = liens.length - 1;
        // console.log(lastElement);
        console.log(liens[lastElement].getAttribute('href'));
    } else {
        console.log('Aucun élément trouvé');
    }
}

infosLiens();

console.log('-------------------------------')

// Ajoutez à la fin du programme instruments.js le code suivant:

function possede(instrument, type) {
    let element = document.getElementById(instrument);

    if (element !== null) {
        console.log(element.classList.contains(type));
    } else {
        console.log('Pas d\'ID correspondant');
    }
}


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur

// ------------------------ >  Écrivez la fonction "possede" qui vérifie qu'un élément possède une classe.