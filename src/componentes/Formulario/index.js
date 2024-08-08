import Botao from "../Botao"
import Campotexto from "../Campotexto"
import Listasuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { useState } from "react"

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColabCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do contribuidor</h2>
                <Campotexto 
                  obrigatorio={true}
                  label="Nome"
                  placeholder="Digite seu nome"
                  valor={nome}
                  aoAlterado={valor=> setNome(valor)}
                  />
                <Campotexto 
                 obrigatorio={true} 
                 label="Cargo" 
                 placeholder="Digite seu cargo"
                 valor={cargo}
                  aoAlterado={valor=> setCargo(valor)}
                 />
                <Campotexto 
                 label="Imagem" 
                 placeholder="Informe o endereço da imagem"
                 valor={imagem}
                  aoAlterado={valor=> setImagem(valor)}
                 />
                <Listasuspensa 
                 label="Time" 
                 itens={props.times}
                 valor={time}
                 aoAlterado={valor=> setTime(valor)}
                 />

                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario