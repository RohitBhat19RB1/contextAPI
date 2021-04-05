import React from 'react'
import {UserContext} from '../App'

function ComponentD() {
    const Consumer = UserContext.Consumer
    return (
        <div>
            <Consumer>
                {
                   // user
                    u => {
                    return  <h1>Hi there, i'm {u }</h1>
                    }
                }
            </Consumer>        
        </div>
    )
}

export default ComponentD
