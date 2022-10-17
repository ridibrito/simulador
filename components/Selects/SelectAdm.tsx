import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface IAdm {
  id: string
  name:string
}

export default function SelectAdm() {
  const [adms, setAdms] = useState<IAdm[]>([])

  const options = adms.map(adm => ({
    value: adm.id,
    label: adm.name
  }))
  
useEffect(()=> {
  fetch('/api/administradora')
  .then(res => res.json())
  .then(({ data }) => setAdms(data))
},[])

  return(
  <Select 
  options={options}
  placeholder='Selecione uma administradora'

  />
 )}