

let mesures = [
    
    {  largeur:1000,  longueur:500},
    
    {  largeur:100,  longueur:50},
 ]

let superficies = mesures.map((largeur,longueur) => largeur * longueur );

console.log(superficies);
/*
let mot=[
    'bonjour',
    'help',
    'soleil',
    'hi'
];

let newMot = mot.filter(mot => mot.length < 5).map(mot => mot.toUpperCase());

console.log(newMot);*/


let t = [3,5,2,4,11,7,9,8];/*
console.log("avant tri : " , t);
// sort sur un tableau necessite 
// une fonction flechee qui pour
// 2 element v1 et v2 à comparer du tableau
//retourne une valeur négative si v1 plus petit
//retourne une valeur positive si v1 plus grand
// 0 sinon
t.sort((v1,v2) => v1 % 2 !=  0 ? (v2 % 2 != 0 ? v1 - v2 : -1 ): (v2 % 2 != 0 ? 1 : v1 - v2 ));
console.log("Après tri : " , t);*/

// Question 1: ecrire le code pour savoir 
// si chaque valeur du tableau t est positive
// voir slide 84 pour inspiration
let b =  t.every(v => v >=0);
//console.log("b =", b)

// Question 2: ecrire le code permettant de
// construire un deuxieme tableau 
// t2 a partir dr t avec uniquement les valeurs 
// supérieures ou egales à 10
let b2=  t.filter(v=> v>=10);
//console.log("b2 =", b2)



// Question 3: ecrire le code permettant de
// construire un troisième tableau t3 avec
//les valeurs de t transformées en leurs valeur
// multipliées par 10
let b3=  t.map(v=> v * 10);
//console.log("b2 =", b3);


// Question 4: Déclarer deux objets avec 
// a) deux champs name et age

let person1 = { 
    name :'Albert',
    age: 5 };
let person2 = { 
    name :'Maxime',
    age:18};
   
// b) déclarer un tableau directement avec ces 2 objets
let table = [person1, person2];
//console.log(table);

// c) Déclarer un trosième objet et l'ajouter au tableau
/*let person3 = {

    name: 'jackytuning',
    age : 50
};*/

table.push( {name : 'Jacky',
age : 50});
//console.log( table);
// d) trier les objets du tableau en fonction de l'age des personnes : revoir le code du tout début
//table.sort((v1,v2)=> v1.age - v2.age )
//console.log("Après tri : " , table);

// e) et comment faire pour trier sur le nom ? ecrire une fonction de comparaison a part => vooir MDR sort sur le net
function comparenames(p1,p2)
{
if(p1.name< p2.name)
return-1;
if(p1.name> p2.name)
return 1;
return 0;
}

//table.sort(comparenames);
//console.log( table);

//Question: construire un tableau avec uniquement le nom des personnes majeures
//methode nouvelle
let tri = table.filter(v => v.age >= 18).map(v=> v.name);
//methode traditionnelle
let tritradi = [];
for ( let p of table)
{
    if (p.age>=18)
    {tritradi.push(p.name);}
}

//console.log( tri);
//console.log( tritradi);