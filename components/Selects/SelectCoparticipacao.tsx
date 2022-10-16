import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface ICoparticipacao{
  id: string
  name: string
}

export default function SelectCoparticipacao() {
const [ coparts, setCoparts] = useState<ICoparticipacao[]>([])
  

const copartOptions = coparts.map((copart) => ({
  value: copart.id,
  label: copart.name 
}))

useEffect(() => {
 fetch('/api/coparticipacao').then(res => res.json()).then(({ data }) => setCoparts(data))  
},[])


  return(
  <Select 
  options={copartOptions}
  placeholder='Coparticipação'

  />
 )}