class Personagem{
    #vida;

    constructor(mana, vida, forca){
    mana = mana,
    this.forca = forca,
    this.#vida = vida
   }
   getvida(){
    return this.#vida;
   }

   setvida(novavida) {
    this.#vida = novavida;
   }

   Executarataque(){
    console.log("Ataque surpresa")
   }
   Defesa(){
    console.log("Parry")
}
   Usarmagia(){
    console.log("Fireball")
}
   Atacar(){
    console.log("Flechada")
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
    Executarataque(){
        console.log("Defender com o escudo")
    }
}
class Mago extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Usarmagia(){
        console.log("Fireball")
    }
    Executarataque(){
        console.log("Bola de fogo")
    }
    
}
 class Arqueiro extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Atacar(){
        console.log("Flechada")
    }
    Executarataque(){
        console.log("Flechada na cabeça")
    }
}