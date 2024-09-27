/*
Motivation pour les tableaux:

let age1 = 15;
let age2 = 25;
let age3 = 10;

function displayMessage(age) {
    console.log("On m'a donné", age);
    if(age < 18) {
        console.log("La personne est mineure");
    } else {
        console.log("La personne est majeure");
    }
}

displayMessage(age1);
displayMessage(age2);
displayMessage(age3);

let ages = [15, 25, 10];
displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);

for(let i = 0 ; i < ages.length ; i++) {
    console.log(i);
    displayMessage(ages[i]);
}
*/

/*
cours tableaux:

// Création d'un tableau : grâce aux crochets
[1,4,7,8]
// On le met dans une variable :
let tab = [10,4,7,8,5];
// Automatiquement, les cases sont numérotées.
// La première (qui contient 10 est la case numéro 0)
// La deuxième (qui contient 4 est la case numéro 1)
// ...
// La dernière (qui contient 5 est la case numéro 4)

// Accéder aux cases individuelles du tableau
// J'ai besoin du numéro de la case
// tab[numéro]
// Par exemple : afficher dans la console ce qu'il y a dans la première case de tab
console.log(tab[0]);
// Autre exemple : mettre 77 dans la troisième case de tab
// Troisième case : case numéro 2
tab[2] = 77;

// Ajouter une nouvelle case à la fin de tab
// Grâce à la fonction tab.push
tab.push(-8);

console.log(tab);

// Retirer la dernière case du tableau tab
tab.pop();
// Subtilité : cette fonction retourne une valeur ! C'est la valeur qui était dans la case qui vient d'être supprimée.
console.log("Je supprime", tab.pop(), "de tab");

console.log(tab);

// Je peux connaître la taille de tab (le nombre de cases) grâce à la variable tab.length.
// C'est une variable créée automatiquement (je ne fais pas let ...) et elle est mise à jour automatiquement (je ne la modifie pas).
console.log("Le tableau tab contient", tab.length, "cases");




// Parcours de tableau
// Regarder les cases une par une
// Afficher toutes les cases du tableau, une par une
for(let i = 0 ; i < tab.length ; i++) {
    console.log(tab[i]);
}
*/

// exercices:

// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144,202,216,216,222,64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);
// 3) Afficher *un par un* tous les éléments du tableau tab1.
for (let i=0;i<tab1.length;i++){
    console.log("les éléments de tab1 sont",tab1[i]);
}
// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();
// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238,222,228,216,200];
// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);
// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
for (let i=0;i<tab2.length;i++){
    tab1.push(tab2[i]);
}
// 8) Afficher *un par un* tous les éléments du tableau tab1.
for (let i=0;i<tab1.length;i++){
    console.log("les nouveaux éléments de tab1 sont",tab1[i]);
}
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable=tab1.pop();

// 10) Afficher la taille du tableau tab1.
console.log("la taille de tab1 est de",tab1.length);
// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);
// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
for (let i=0;i<tab1.length;i++){
    tab1[i]= tab1[i]/2;
}
// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça) ==> traduit les nombres en lettres

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function seeLastOfTab(tabX){
    console.log(tabX[tabX.length-1]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function keepLastOfTab(tabX){
    return tabX[tabX.length-1];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function tabMin(tabX){
    let memo=tabX[0];
    for (let i=0;i<tabX.length;i++){
        if (tabX[i]<memo){
            memo=tabX[i];
        }
    }
    return memo;
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function tabMax(tabX){
    let memo=tabX[0];
    for (let i=0;i<tabX.length;i++){
        if (tabX[i]>memo){
            memo=tabX[i];
        }
    }
    return memo;
}


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function valeurXfois (tabX,x){
    let compteur=0;
    for (let i=0;i<tabX.length;i++){
        if (tabX[i]==x){
            compteur++;
        }
    }
    return compteur;
}

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function tabExist (tabX,x){
    let reponse = "false";
    for (let i=0;i<tabX.length;i++){
        if (tabX[i]==x){
            reponse = "true";
        }
    }
    return reponse;
}

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tabA = [];
for (let i=0;i<7777;i++){
    tabA.push(i);
}

// Créer un tableau qui contient [10,20,30,...,77770].
let tabB = [];
for (let i=0;i<7777;i++){
    tabB.push(i*10);
}
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tabC = [];
for (let i=0;i<tabB.length;i++){
    tabC.push(tabB[i]/2);
}

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function tabDeletUnder50 (tabX){
    let a=tabX.lenght;
    for (let i=0;i<a;i++){
        if (tabX[a-1]<50){
            tabX.pop();
            a--;
            }
    }
    return tabX;
}

console.log(tabDeletUnder50([1,45,88,54,23,-100,12]));
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]