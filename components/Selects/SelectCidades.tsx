import React from 'react'
import Select from 'react-select'


const options = [
  { value: 'DF', label: 'DF' },
 
]

export default function SelectCidades() {
  return(
  <Select 
  options={options}
  placeholder='Selecione uma Cidade'

  />
 )}