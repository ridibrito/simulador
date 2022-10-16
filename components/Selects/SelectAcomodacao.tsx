import React, { useEffect, useState } from 'react'
import Select from 'react-select'


interface IAcomodacao{
  id: string
  name: string
}

export default function SelectAcomodacao() {
  const [ acomodacaos, setAcomodacaos] = useState<IAcomodacao[]>([])

  const acomodacaoOptions = acomodacaos.map((acomodacao) => ({
    value: acomodacao.id,
    label: acomodacao.name
  }))

  useEffect(() => {
    fetch('/api/acomodacao')
    .then(res => res.json())
    .then(({data}) => setAcomodacaos(data))
  },[])

  
  return(
  <Select 
  options={acomodacaoOptions}
  placeholder='Acomodação'

  />
 )}