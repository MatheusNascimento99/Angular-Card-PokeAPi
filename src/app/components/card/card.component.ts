import { Component, OnInit } from '@angular/core';
import { concatMapTo } from 'rxjs';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:pokemonData = {  //* isso é inicialiazar o objeto para que não de erro no tipo
    id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
  }
  constructor(
    private service:PokemonServiceService
  ) { }

  ngOnInit(): void {
    this.getPokemon("pikachu")
  }


getPokemon(searchName:string){
  this.service.getPokemon(searchName).subscribe({ //!subscrible serve para acessar o observable
    next: (res) => {
      this.pokemon = {
        id:res.id,
        name:res.name,
        sprites:res.sprites,
        types:res.types

      }
      
    },
    error: (err) => console.log('not found')
  }) //*getPokemon é uma função que está no service, aqui eu apenas injeto ela e uso
  console.log(searchName)
}

}
