
import "./Campotexto.css"
interface CampoTextoProps {
    aoAlterado : (valor : string) => void,
    placeholder : string,
    label : string;
    valor : string,
    obrigatorio ?: boolean
}

const Campotexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false} : CampoTextoProps) =>{

   const placeholderModificada = `${placeholder}...`
    
    const aoDigitado = (evento : React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
             value={valor}
             onChange={aoDigitado}  
             required={obrigatorio} 
             placeholder={placeholder}
            ></input>
            
        </div>
    )
}

export default Campotexto
//`$props.{placeholder}...`