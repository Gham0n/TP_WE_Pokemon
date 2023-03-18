import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: number = 0;
  selectedPokeId: string = '';
  selectedPokeName: string = '';
  selectedPokeHeight: number = 0;
  selectedPokeWeight: number = 0;
  selectedPokeStats: any[] = []; // Ajout d'une propriété pour les statistiques
  searchPokeName: string = '';
  

  pokes: Pokemon[] = [];

  constructor(private pokeService: PokeAPIServiceService) {
  }

  ngOnInit(): void {
    for (let i = 1; i <= 151; i++) {
      this.pokeService.getPokemon(i).subscribe((data) => {
        this.pokes.push(data);
      });
    }
  }
  
  

  onSelectedPokeChange(): void {
    if (this.selectedPokeId) {
      this.pokeService.getPokemon(parseInt(this.selectedPokeId))
        .subscribe((data) => {
          this.selectedPokeName = data.name;
          this.id = data.id;
          this.selectedPokeHeight = data.height;
          this.selectedPokeWeight = data.weight;
          this.selectedPokeStats = this.getSelectedPokeStats(data);
        });
    }
  }

  go(): void {
    if (!isNaN(parseInt(this.selectedPokeId))) {
      const selectedPoke = this.pokes.find((poke) => poke.id === parseInt(this.selectedPokeId));
      if (selectedPoke) {
        console.log(selectedPoke.name);
      }
    }
  }

  getSelectedPokeStats(pokeData: any): any[] {
    const stats = pokeData.stats;
    const selectedStats = stats.map((stat: any) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat
      };
    });
    return selectedStats;
  }

  
  
}