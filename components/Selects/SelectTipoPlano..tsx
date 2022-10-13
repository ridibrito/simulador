import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Individual', label: 'Individual' },
  { value: 'Adesão', label: 'Adesão' },
  { value: 'PME', label: 'PME' },
  { value: 'Familiar', label: 'Familiar' }
]

export default function SelectTipoPlano() {
  return(
  <Select 
  options={options}
  placeholder='Tipo de Plano'

  />
 )}