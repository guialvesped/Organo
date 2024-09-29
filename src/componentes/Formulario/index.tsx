import { IColaborador } from "../../compartilhado/IColaborador"
import Botao from "../Botao"
import Campotexto from "../Campotexto"
import Listasuspensa from "../ListaSuspensa"
import "./Formulario.css"
import React, { useState } from "react"

interface FormularioProps {
    aoColabCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

const Formulario = (props : FormularioProps) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColabCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
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
                 <Campotexto
                    label="Data de entrada no time"
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />
                <Listasuspensa 
                 required ={true}
                 label="Time" 
                 itens={props.times}
                 valor={time}
                 aoAlterado={valor=> setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario