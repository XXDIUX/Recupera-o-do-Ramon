class Personagem{
    #vida;
    #mana;
    #forca;

    constructor(mana, vida, forca){
    this.mana = mana,
    this.forca = forca,
    this.#vida = vida
   }
   getvida(){
    return this.#vida;
   }

   setvida(novavida) {
    this.#vida = novavida < 0 ? 0: novavida;
   }
   Atacar(oponente) {
    if (!(oponente instanceof Personagem)) {
        console.log("Você só pode atacar outro personagem");
        return;
    }
    const dano = this.força;
     const vidaAtual = oponente.getvida();
     oponente.setvida(vidaatual - dano);
     console.log(`${this.constructor.name} atacou causando ${dano} de dano. Vida do oponente agora é ${oponente}`)
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