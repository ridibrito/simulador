import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Saúde', label: 'Saúde' },
 
]

export default function SelectTipoProduto() {
  return(
  <Select 
  options={options}
  placeholder='Tipo de Produto'

  />
 )}