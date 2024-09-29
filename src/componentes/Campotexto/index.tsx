
import "./Campotexto.css"
interface CampoTextoProps {
    aoAlterado : (valor : string) => void,
    placeholder : string,
    label : string;
    valor : string,
    obrigatorio ?: boolean
    tipo ?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const Campotexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = 'text'} : CampoTextoProps) =>{

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
             type={tipo}
            ></input>
            
        </div>
    )
}

export default Campotexto
//`$props.{placeholder}...`