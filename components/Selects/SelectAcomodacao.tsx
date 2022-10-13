import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Apartamento', label: 'Apartamento' },
  { value: 'Enfermaria', label: 'Enfermaria' },
  { value: 'Ambulatorial', label: 'Ambulatorial' },
]

export default function SelectAcomodacao() {
  return(
  <Select 
  options={options}
  placeholder='Acomodação'

  />
 )}