import { createContext, useState } from "react";
import { getFipe } from "../services/getFipe";
import { useRouter } from "next/navigation";

type Fipe = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};

type SubmitProps = {
  brandId: string;
  modelId: string;
  yearId: string;
};

type FipeContextType = {
  data: Fipe | undefined;
  handleFipeSubmit: (data: SubmitProps) => void;
  error: Error | undefined;
  setError: (error: Error | null) => void;
};

export const FipeContext = createContext({} as FipeContextType);

export const FipeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const handleFipeSubmit = async (dataSubmit: SubmitProps) => {
    try {
      const res: Fipe = await getFipe({
        brandId: dataSubmit.brandId,
        modelId: dataSubmit.modelId,
        yearId: dataSubmit.yearId,
      });

      setData(res);
      return router.push("success");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <FipeContext.Provider value={{ data, handleFipeSubmit, error, setError }}>
      {children}
    </FipeContext.Provider>
  );
};
