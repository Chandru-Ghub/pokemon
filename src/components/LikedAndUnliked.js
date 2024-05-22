import React, { useEffect, useState } from 'react'
import Pokemons from './Pokemons'
import '../styles/Liked.css'
const LikedAndUnliked = () => {
  const [liked,setLiked] = useState([])
  const [disLiked,setDisLiked] = useState([])
  useEffect(()=>{
      setLiked(JSON.parse(localStorage.getItem('liked')))
      setDisLiked(JSON.parse(localStorage.getItem('disliked')))
  },[])
  return (
    <div className='likedPokemons'>
     <div className='left'>
     <h1>👍 Liked</h1>
        {liked?<div className="likedlist">
        {liked.map(pokemon=>
        <Pokemons img2={pokemon.sprites.other.showdown.front_default} id={pokemon.id} name={pokemon.name} img={pokemon.sprites.other.dream_world.front_default} type={pokemon.types} ability={pokemon.abilities} />
  
      )}
        </div>:<div className='info'>
            Give your first like
          </div>}
     </div>
     <div className='right'>
     <h1> 👎DisLiked</h1>
        {disLiked?<div className="dislikedlist">
        {disLiked.map(pokemon=>
        <Pokemons img2={pokemon.sprites.other.showdown.front_default} id={pokemon.id} name={pokemon.name} img={pokemon.sprites.other.dream_world.front_default} type={pokemon.types} ability={pokemon.abilities} />
  
      )}
        </div>:<div className='info'>
          You liked all the pokemon
          </div>}
     </div>
     
    </div>
  )
}

export default LikedAndUnliked