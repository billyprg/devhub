import React from 'react'
import Data from './Data.json';
import { useState } from 'react';

export const News = () => {

  const [search, setSearch] = useState("")

  return (

    

    <div className='App'>
      
        <input type="text" placeholder='Search' onChange={(event) =>{
          setSearch(event.target.value)
        }} 
        />
      {Data.filter((val) =>{
        if (search == ""){
          return val
        }else if (val.firstname.toLowerCase().includes(search.toLowerCase())){
          return val
        }

      }

      
      )
      
      .map((val,key)=>{
        return(
          <div className='user' key={key}>
            <p> {val.firstname} </p>

          </div>

        )
      })}
      
    </div>
  )
}


