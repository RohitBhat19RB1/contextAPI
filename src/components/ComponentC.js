import React, {useContext} from 'react'
import ComponentD from './ComponentD';
import {UserContext} from '../App'

 function ComponentC() {

    const user = useContext(UserContext)

    return (
        <div>
          <h1> Hello, i'm {user}</h1>
        <ComponentD />
        </div>
    )
}

export default ComponentC