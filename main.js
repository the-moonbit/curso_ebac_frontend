    class GrupoKpop {
    constructor(nome, empresa, anoDebut, fandom) {
        if (this.constructor === GrupoKpop) {
        throw new Error("A classe 'GrupoKpop' é abstrata. Você precisa criar um conceito específico de grupo!");
        }
        this.nome = nome;
        this.empresa = empresa;
        this.anoDebut = anoDebut;
        this.fandom = fandom;
    }

    apresentar() {
        return `✨ ${this.nome} (${this.empresa}) — conquistando os ${this.fandom} desde ${this.anoDebut}.`;
    }

    musicBankShowcase() {
        throw new Error("Todo grupo de K-Pop precisa apresentar o seu comeback com o 'musicBankShowcase()'!");
    }
    }

    class GrupoRock extends GrupoKpop {
    constructor(nome, empresa, anoDebut, fandom, maiorHit) {
        super(nome, empresa, anoDebut, fandom);
        this.maiorHit = maiorHit;
    }

    musicBankShowcase() {
        return `🎸 ${this.nome} dominou o palco com instrumentais pesados e vocais perfeitos ao som de "${this.maiorHit}"!`;
    }

    conceitoDark() {
        return `🌙 ${this.nome} mergulhou no conceito sombrio e apresentou uma coreografia hipnotizante.`;
    }
}

class GrupoLore extends GrupoKpop {
    constructor(nome, empresa, anoDebut, fandom, universo) {
        super(nome, empresa, anoDebut, fandom);
        this.universo = universo;
    }

    musicBankShowcase() {
        return `🌕 ${this.nome} entregou sincronia impecável e transições perfeitas conectadas ao ${this.universo}!`;
    }

        extenderLore() {
    return `🔮 ${this.nome} lançou um MV cheio de simbolismos e deixou os ${this.fandom} criando teorias!`;
    }
}

class GrupoDual extends GrupoKpop {
    constructor(nome, empresa, anoDebut, fandom, ladoAtual) {
        super(nome, empresa, anoDebut, fandom);
        this.ladoAtual = ladoAtual; //
    }

    musicBankShowcase() {
        return `🎂 ${this.nome} exibiu vocais cristalinos e presença de palco no conceito ${this.ladoAtual}!`;
    }

        alternarConceito(novoLado) {
    this.ladoAtual = novoLado;
    return `🔄 ${this.nome} mudou de era! Agora o conceito é "${this.ladoAtual}".`;
    }
}

const dreamcatcher = new GrupoRock("Dreamcatcher", "Dreamcatcher Company", 2017, "InSomnia", "Scream");
const loona = new GrupoLore("LOONA", "Blockberry Creative", 2018, "Orbit", "LOONAVERSE");
const redVelvet = new GrupoDual("Red Velvet", "SM Entertainment", 2014, "ReVeluv", "Red");

console.log(dreamcatcher.apresentar());
console.log(dreamcatcher.musicBankShowcase());
console.log(dreamcatcher.conceitoDark());

console.log("---");

console.log(loona.apresentar());
console.log(loona.musicBankShowcase());
console.log(loona.extenderLore());

console.log("---");

console.log(redVelvet.apresentar());
console.log(redVelvet.musicBankShowcase());
console.log(redVelvet.alternarConceito("Velvet"));
console.log(redVelvet.musicBankShowcase());