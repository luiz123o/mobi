type FipeProps = {
  brandId: string;
  modelId: string;
  yearId: string;
}


export async function getFipe({brandId, modelId, yearId}: FipeProps) {
  const res = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    
    throw new Error("Erro ao obter as marcas");
  }

  return res.json();
}
