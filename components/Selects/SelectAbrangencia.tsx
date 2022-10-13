import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Nacional', label: 'Nacional' },
  { value: 'Regional', label: 'Regional' },
  { value: 'Grupo de municipios', label: 'Grupo de municipios' },
]

export default function SelectAbrangencia() {
  return(
  <Select 
  options={options} 
  placeholder='Abrangência'
  />
 )}