export async function getBrand() {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao obter as marcas");
  }

  return res.json();
}
