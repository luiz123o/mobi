export async function getYear({ brandId, modelId }: { brandId: string, modelId: string }) {
  console.log(brandId, modelId)
  const res = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`,
    {
      cache: "default",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao obter os anos");
  }

  return res.json();
}
