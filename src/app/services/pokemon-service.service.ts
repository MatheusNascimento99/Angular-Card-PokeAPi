import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //!o injectable coloca o serviço no componente passando para ele tudo o que ele realiza

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs' //*fica vigiando a ação do usuário
import { pokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root' //!informa que está na raiz do projeto o que significa que todos poderão consumi-lo
})
export class PokemonServiceService {
  private baseUrl:string = "" //! informando que a url será uma string
  private pokeData: pokemonData | any

  constructor(
    private http: HttpClient
    
  ) {
    this.baseUrl = environment.pokeAPi  //!buscando a url no arquivo environment
   }

  getPokemon(pokemonName:string):Observable<pokemonData> { //*aqui o Observable vigia a ação de função de requisição
      this.pokeData = this.http.get<pokemonData>(`${this.baseUrl}${pokemonName}`)
      return this.pokeData
  }

}
