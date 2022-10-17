import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface IProfissao{
  id: string
  name: string
}


export default function SelectProfissao() {
  const [profissaos, setProfissaos] = useState<IProfissao[]>([])

  const options = profissaos.map((profissao) =>({
    valeu: profissao.id,
    label: profissao.name
  }))

useEffect(()=> {
  fetch('/api/profissao').then(res => res.json()).then(({ data })=> setProfissaos(data))
} , [])

  return(
  <Select 
  options={options}
  placeholder='Selecione uma profissão'

  />
 )}