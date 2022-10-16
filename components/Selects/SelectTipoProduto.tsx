import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface ITipoProduto{
  id: string
  name: string
}

export default function SelectTipoProduto() {
  const [tipoProdutos, setTipoProdutos] = useState<ITipoProduto[]>([])

  const tipoprodutoOptions = tipoProdutos.map(tipoProduto => ({
    value: tipoProduto.id,
    label: tipoProduto.name
  }))

  useEffect(() => {
    fetch('/api/tipoProduto').then(res => res.json()).then(({ data }) => setTipoProdutos(data))
  },[])

  return(
  <Select 
  options={tipoprodutoOptions}
  placeholder='Tipo de Produto'

  />
 )}