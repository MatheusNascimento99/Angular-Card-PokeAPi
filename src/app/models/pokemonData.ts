export type pokemonData = {
    name:string
    id:number
    sprites: {
        front_default:string   //* isso é shapar o dado, colocando exatamente como quero receber a informação
    }
    types: {
        slot:number
        type:{
            name:string
            url:string
        }
        
    } []
}
