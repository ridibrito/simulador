import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Qualicorp', label: 'Qualicorp' },
  { value: 'Allcare', label: 'Allcare' },
  { value: 'Affix', label: 'Affix' },
  { value: 'Grupo Elo', label: 'Grupo Elo' }
]

export default function SelectAdm() {
  return(
  <Select 
  options={options}
  placeholder='Selecione uma administradora'

  />
 )}