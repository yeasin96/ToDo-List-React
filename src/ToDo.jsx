import React from 'react';
import Button from '@material-ui/core/Button'




function ToDo(p) {
   
    return (
        <>
            <li><button onClick={()=>{
                p.fun(p.id)

            }} >-</button>{p.item} </li>
        </>
    )
}
export default ToDo