import React, {useState, useEffect} from 'react';
import api from '../api/api';

import {
    Bloco,
    B
} from './styles'

export default function Conversor(props) {

const [Convertido, setConvertido] = useState('')
const [Conversor, setConversor] = useState('')
const [Converter, setConverter] = useState('')
const [propriedade, setPropriedade] = useState(props.moedaA+props.moedaB)

useEffect(() => {
    api.get(props.moedaA+'-'+props.moedaB)
    .then(res => {
        setConversor(res.data[propriedade].bid)
    })
}, [Conversor]);

useEffect(() => {
    setConverter(Converter.toString().replace(",", "."))
},[Converter])

    function Convert() {
        setConvertido((Conversor*Converter).toLocaleString('pt-br',{style: 'currency', currency: props.moedaB}))
        console.log(Converter, Conversor, Convertido)
        }

  return (
    <Bloco>
        <h2>{props.moedaA} para {props.moedaB}</h2>
        <B><p>{props.moedaA} agora: {Conversor}</p></B>
        <label><p>Digite o Valor: </p> <input type="text" placeholder="Ex: 20" value={Converter} onChange={e => setConverter(e.target.value)}/></label>
        <input type="button" value="Convert" onClick={Convert}/>
        <p> Valor convertido: {Convertido}</p> 
    </Bloco>
  );
}
