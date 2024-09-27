// Tout le code à l'intérieur de la fonction qui s'appelle setup est automatiquement exécuté par p5 quand on démarre le dessin (en cliquant sur la flèche).
function setup() {
    console.log("Setup");
    // Créer la toile de largeur 600px et de hauteur 400px.
    createCanvas(600, 400);
}

// Tout le code à l'intérieur de la fonction qui s'appelle draw est automatiquement exécuté après le setup, en boucle (infinie).
// - p5 fait un draw
// - p5 affiche le résultat
// - p5 fait un draw
// - p5 affiche le résultat
// ...

// 1 draw = 1 frame de l'animation
function draw() {
    console.log("Draw");
    // Remplir le canevas d'une couleur.
    // 1 nombre = nuance de grid (0: noir -> 255: blanc)
    // 3 nombres = RGB (red/gree/blue, rouge/vert/bleu)
    // 4 nombres = RGBa (opacité)
    background(0);
    
    // Changer la couleur du crayon.
    stroke(255);
    // Changer la taille du crayon.
    strokeWeight(7);
    // Dessiner un point en x, y.
    point(250, 200);
    // Dessiner une line de x1, y1 à x2, y2.
    line(240, 270, 360, 250);
    // Désactiver le remplissage des formes.
    noFill();
    // Faire un cercle à la position x, y d'une certaine taille.
    circle(300, 230, 200);
    stroke(255, 255, 0, 150);
    // Faire une ellipse (un cercle aplati) à la position x, y avec une certaine largeur et une certaine hauteur.
    ellipse(300, 100, 150, 30);
    
    // Changer la couleur de remplissage du crayon (et donc activer le remplissage).
    fill(0, 100, 255, 150);
    // Faire un carré en x, y d'une certaine taille.
    // Attention, le carré n'est pas centré ! C'est la position du coin en haut à gauche qu'on donne.
    square(335, 185, 30);
    
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    // Faire un rectangle  en x, y avec une certaine largeur et une certaine hauteur.
    // Attention, le rectangle n'est pas centré ! C'est la position du coin en haut à gauche qu'on donne.
    rect(10, 10, 580, 380);
    stroke(0, 255, 0);
    strokeWeight(7);
    point(350, 200);
    
    // Les deux variables mouseX et mouseY sont :
    // - automatiquement créées par p5 (on ne fait pas `let mouseX`
    // - automatiquement mises à jour par p5 (on ne va pas les modifier)
    // Elles contiennent les coordonnées de la souris dans le canevas.
    line(300, 225, mouseX+20, mouseY);
    
}

// Le code à l'intérieur de la fonction mouseClicked est automatiquement exécuté par p5 quand l'utilisateur clique dans le dessin.
function mouseClicked() {
    console.log("Clic !");
    // Ce point disparaît très rapidement ! Il ne faut pas oublier que p5 fait plusieurs dizaines de `draw` par seconde. Et au début de chaque `draw`, on remplit le canevas de noir !
    point(100, 100);
}

