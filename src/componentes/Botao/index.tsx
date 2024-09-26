import { ReactElement } from "react"
import "./Botao.css"
import React from "react"

interface BotaoProps {
    children : ReactElement | string
}

const Botao = (props : BotaoProps) => {
    return ( 
        <button className="botao">
            {props.children}
        </button>

    )
}
//{props.children} <Botao>"Criar card"</Botao>
export default Botao