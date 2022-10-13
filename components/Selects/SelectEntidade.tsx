import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'ABRACEM', label: 'ABRACEM' },
  { value: 'ASPB', label: 'ASPB' },
  { value: 'ABRACIM', label: 'ABRACIM' },
  { value: 'UBES', label: 'UBES' }
]

export default function SelectEntidade() {
  return(
  <Select 
  options={options}
  placeholder='Selecione uma Entidade'

  />
 )}