import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface IEntidade{
  id: string
  name: string
}

export default function SelectEntidade() {
  const [entidades, setEntidades] = useState<IEntidade[]>([])


  const entidadeOptions = entidades.map((entidade)=>({
    valeu: entidade.id,
    label: entidade.name
  }))

  useEffect(()=> {
    fetch('/api/entidade').then(res => res.json()).then(({data}) => setEntidades(data))
  },[] )

  return(
  <Select 
  options={entidadeOptions}
  placeholder='Selecione uma Entidade'

  />
 )}