export async function getModels({ brandId }: { brandId: string }) {
  const res = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`,
    {
      cache: "default",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao obter os modelos");
  }

  return res.json();
}
