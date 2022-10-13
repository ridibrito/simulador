import React from 'react'
import Select from 'react-select'



const options = [
  { value: 'Profissional Liberal', label: 'Profissional Liberal' },
  { value: 'Servidor Público', label: 'Servidor Público' },
  { value: 'Estudante', label: 'Estudante' },
  { value: 'Comerciário', label: 'Comerciário' }
]

export default function SelectProfissao() {
  return(
  <Select 
  options={options}
  placeholder='Selecione uma profissão'

  />
 )}