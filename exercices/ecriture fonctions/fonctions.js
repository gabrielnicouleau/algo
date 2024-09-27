// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1()

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
f2()
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// ---elle  a un résultat qui pourra ou non être affiché dans la console contrairement à la fonction f1 qui n'a pas le choix.---
// correction
// La fonction f1 est spécialisée pour faire de l'affichage dans la console. Quand on veut afficher la valeur dans la console, elle est plus pratique. En revanche, la fonction f2 est plus souple : elle me donne le résultat, ce qui me permet d'en faire ce que je veux.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    let res=2*n;
    console.log(res);
}
// correction
/*function f3(n) {
    console.log(2*n);
}
*/

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99)
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    let res=2*n;
    return res;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a=f4(99);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n,m){
    let res=n+m;
    console.log(res);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77)
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n,m){
    let res=n+m;
    return res;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77))
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+=f6(42,77)

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n,m){
    if(n>m){
        return n;
    }else {
        return m;
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

function f8(n,m,o){
    if (n>m&&n>o){
        return n;
    } else if(m>=o){
        return m;
    } else {
        return o;
    }
}
// ou

function f8bis(p,q,o){
    return f7(o,f7(p,q));
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(n,mot){
    for(i=1;i<=n;i++){
        console.log(mot)*n;
    }
}
f9(6,"gabriel");

/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/

/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/

/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/

// correction
/*

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n) {
    return 2*n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n1, n2) {
    console.log(n1+n2);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42, 77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n1, n2) {
    return n1+n2;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42, 77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
//a = a+f6(42,77);
a = f6(a, f6(42,77));
console.log("Après incrémentation", a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log("Tests de f7");
console.log(f7(10, 5));
console.log(f7(5, 10));
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1, n2, n3) {
    if(n1 > n2) {
        if(n1 > n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2 > n3) {
            return n2;
        } else {
            return n3;
        }
    }
}
console.log("Tests de f8");
console.log(f8(5,10,15));
console.log(f8(15,10,5));
console.log(f8(5,15,10));

function f8Bis(n1, n2, n3) {
    if(n1>=n2 && n1>=n3) {
        return n1;
    } else if(n2>n3) {
        return n2;
    } else {
        return n3;
    }
}
console.log("Tests de f8Bis");
console.log(f8Bis(5,10,15));
console.log(f8Bis(15,10,5));
console.log(f8Bis(5,15,10));


function f8Ter(n1, n2, n3) {
    //let maxN1N2 = f7(n1, n2);
    //return f7(maxN1N2, n3);
    return f7(f7(n1, n2), n3);
}

console.log("Tests de f8Ter");
console.log(f8Ter(5,10,15));
console.log(f8Ter(15,10,5));
console.log(f8Ter(5,15,10));

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(n, word) {
    for(let i = 0 ; i < n ; i++) {
        console.log(word);
    }
}

f9(40, "Maison");
f9(7, "Bonjour");
*/

// que va faire le code suivant dans la console?
function superFonction(a){
    console.log("on m'a donné",a);
    let d=10*a; /*la variable d n'est pas utilisée dans la fonction*/
    return d; /*return stop la fonction*/
    console.log("j'ai répondu",a); /*le log n'est pas atteignable après le return*/
}

console.log("début");
superFonction(10);
console.log("fin");

// la fonction va afficher Début, on m'a donné 10, Fin.

// que va faire le code suivant dans la console?
function superFonction(a){
    console.log("on m'a donné",a);
    let d=10*a; /*la variable d n'est pas utilisée dans la fonction*/
    return d; /*return stop la fonction et le return est gardé en mémoire*/
    console.log("j'ai répondu",a); /*le log n'est pas atteignable après le return*/
}

console.log("début");
console.log (superFonction(10));
console.log("fin");

// la fonction va afficher début, on m'a donné 10, 100, fin.

// que va faire le code suivant dans la console?
function superFonction(a){
    console.log("on m'a donné",a);
    let d=10*a; /*la variable d n'est pas utilisée dans la fonction*/
    return d; /*return stop la fonction et le return est gardé en mémoire*/
    console.log("j'ai répondu",a); /*le log n'est pas atteignable après le return*/
}

console.log (superFonction(superFonction(10)));

// l'ordinateur va afficher on m'a donné 10, on m'a donné 100, 1000.