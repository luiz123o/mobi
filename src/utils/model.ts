

export type DataOption = {
  nome: string
  codigo: string
}

export const formattedData = (data: DataOption[]) => {
  const formatted = Array.isArray(data) ? data.map((item) => ({
    label: item.nome,
    value: item.codigo,
  })) : []
  return formatted
}