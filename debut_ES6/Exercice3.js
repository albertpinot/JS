/*Classe parent*/
class Animal 
{
    constructor(name, scream)
    {
        this.name = name; 
        this.scream = scream;
    }
    shout()
    {
        console.log("je suis ", this.name,"Je crie :" , this.scream);
    }
}

/* Sous Classe, extends = extension de classe*/
class Cow extends Animal
{
    constructor(name)
    {   /* Méthose super() = appel le constructeur de la classe parent  */
        super(name,"Meuh")
    }
}

let a = new Animal ("Ive le coq", "Cocorico");
a.shout();

let Vache1 = new Cow ("marguerite");
Vache1.shout();
