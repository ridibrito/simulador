import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface IAbrangencias{
  id: string
  name: string
}


export default function SelectAbrangencia() {
  const [ abrangencias, setAbrangencias] = useState<IAbrangencias[]>([])

  
  const abrangenciaOptions = abrangencias.map(abrangencia => ({
    value: abrangencia.id,
    label: abrangencia.name

  }))

  useEffect(() => {
    fetch('/api/abrangencia').then(res => res.json()).then(({ data }) => setAbrangencias(data))
  }, [] )
  
  return(
  <Select 
  options={abrangenciaOptions} 
  placeholder='Abrangência'
  />
 )}