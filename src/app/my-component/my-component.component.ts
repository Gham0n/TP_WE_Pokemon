import { Component } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon } from '../pokemon';



@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent {

  id: string = '';
  selectedPokeId: string="";
  selectedPokeName: string="";
  searchPokeName: string = '';
pokes : Pokemon[] = [];



constructor(private pokeService : PokeAPIServiceService) {
/*this.pokes.push(new Pokemon('1','Bulbasaure'));
this.pokes.push(new Pokemon('2','Ivysaur'));
this.pokes.push(new Pokemon('3','Venusaur'));
this.pokes.push(new Pokemon('4','Charmander'));
this.pokes.push(new Pokemon('5','Charmeleon'));
this.pokes.push(new Pokemon('6','Charizard'));
this.pokes.push(new Pokemon('7','Squirtle'));
this.pokes.push(new Pokemon('8','Watortle'));
this.pokes.push(new Pokemon('9','Blastoise'));
this.pokes.push(new Pokemon('25','Pikachu'));
*/


}

ngOnInit(): void {
  this.pokeService.getPokemon().subscribe((data) => { 
    // const res = data.results as any[];
    data.results.forEach((e, index) => {
    this.pokes.push(new Pokemon(index.toString() , e.name, e.url));
    });
  }
  );

}

go() {
  console.log(this.selectedPokeId);

}


}
