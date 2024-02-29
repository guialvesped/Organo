import "./ListaSuspensa.css"

const Listasuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} placeholder = {props.placeholder}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>

        </div>
    )
}

export default Listasuspensa