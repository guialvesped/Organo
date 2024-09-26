import "./ListaSuspensa.css"

interface ListaSuspensaProps {
    aoAlterado : (valor : string) => void
    label: string
    required: boolean
    valor: string
    itens: string[]
}

const Listasuspensa = (props : ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
            onChange={evento => props.aoAlterado(evento.target.value)} 
            required={props.required} 
            value={props.valor} 
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>

        </div>
    )
}

export default Listasuspensa