export interface PokeServiceRes {
count: number;
next: string;
previous: null;
results: IPokemon[];

}

export interface IPokemon {
    name: string;
    url: string;
}


export class Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  stats: any;

  constructor(id: number, name: string, weight: number, height: number, attack: number, defense: number, speed: number, specialAttack: number, specialDefense: number) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
  }
}