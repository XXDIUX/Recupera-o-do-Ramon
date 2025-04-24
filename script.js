class Personagem{
    constructor(mana, vida, forca){
    mana = mana,
    this.forca = forca,
    this.vida = vida
   }

}
class Guerreiro extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    this.Atacar = Atacar;
    }
    Defesa(){
        console.log("Parry")
    }
    
}
class Mago extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Usarmagia(){
        console.log("Fireball")
    }

    
}
 class Arqueiro extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Atacar(){
        console.log("Flechada")
    }
}