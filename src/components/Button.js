import React from 'react'

const Button=({num,name, push})=>{
return(
    <div >
        <button className="boton" id={name}  onClick={push} value={num}> {num}</button>
    </div>
)
}
export default Button;