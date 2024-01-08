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
  atributesTypes:string [] = ['FIRE', 'ROCK'] 
  constructor(
    private service:PokemonServiceService
  ) { }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe({ //!subscrible serve para acessar o observable
      next: (res) => {
        this.pokemon = {
          id:res.id,
          name:res.name,
          sprites:res.sprites,
          types:res.types

        }
        
      },
      error: (err) => console.log(err)
    }) //*getPokemon é uma função que está no service, aqui eu apenas injeto ela e uso
  }

}
