import "./Botao.css"
const Botao = (props) => {
    return ( 
        <button className="botao">
            {props.texto}
        </button>

    )
}
//{props.children} <Botao>"Criar card"</Botao>
export default Botao