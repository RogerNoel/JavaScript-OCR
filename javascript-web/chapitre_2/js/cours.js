var titresH2 = document.getElementsByTagName('h2');
console.log(titresH2[0]);
console.log(titresH2.length);

let elements = document.getElementsByClassName('merveilles');
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

console.log('Affichage du noeud ayant pour ID "nouvelles"');
console.log(document.getElementById('nouvelles'));

console.log('querySelectorAll pour cibler un sélecteur CSS');
console.log(document.querySelectorAll('p').length);
console.log(document.querySelectorAll('#contenu p').length);
console.log(document.querySelectorAll('.existe').length);

console.log(document.getElementById('contenu').innerHTML);
console.log('--------------------------------------');
console.log(document.getElementById('contenu').textContent);
console.log(document.querySelector('a').getAttribute('href'));
console.log('--------------------------------------');
var classes = document.getElementById('antiques').classList;
for (let i=0; i<classes.length; i++){
    console.log(classes[i]);
}
console.log('--------------------------------------');