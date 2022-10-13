import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Todos', label: 'Todos' },
  { value: 'Sim', label: 'Sim' },
  { value: 'Não', label: 'Não' },
]

export default function SelectCoparticipacao() {
  return(
  <Select 
  options={options}
  placeholder='Coparticipação'

  />
 )}