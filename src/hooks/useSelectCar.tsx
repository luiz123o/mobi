import { useEffect, useState } from "react";
import { getBrand } from "../services/getBrand";
import { getModels } from "../services/getModels";
import { DataOption } from "../utils/model";
import { getYear } from "../services/getYear";

type Brand = {
  nome: string;
  codigo: string;
};

type CarState = {
  brand: {
    id: string;
    data: Brand[];
  };
  models: {
    id: string;
    data: DataOption[];
  };
  years: {
    id: string;
    data: DataOption[];
  };
};

const INITIAL_STATE: CarState = {
  brand: {
    id: "",
    data: [],
  },
  models: {
    id: "",
    data: [],
  },
  years: {
    id: "",
    data: [],
  },
};

export const useSelectCar = () => {
  const [state, setState] = useState<CarState>(INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataBrands = await getBrand();
        setState((prevState) => ({
          ...prevState,
          brand: {
            ...prevState.brand,
            data: dataBrands,
          },
        }));
      } catch (error) {
        // Tratar erro de forma adequada, como exibir mensagem de erro ou logar o erro
        console.error("Erro ao buscar marcas de carros:", error);
      }
    };

    fetchData();
  }, []);

  const onBrand = async (brandId: string) => {
    try {
      const models = await getModels({ brandId });

      setState((prevState) => ({
        ...prevState,
        brand: {
          ...prevState.brand,
          id: brandId,
        },
        models: {
          ...prevState.models,
          data: models.modelos,
        },
        years: {
          ...prevState.years,
          data: models.anos,
        },
      }));
    } catch (error) {
      // Tratar erro de forma adequada, como exibir mensagem de erro ou logar o erro
      console.error("Erro ao buscar modelos de carro:", error);
    }
  };

  const onModel = async ({ modelId }: { modelId: string }) => {
    const res = await getYear({ modelId, brandId: state.brand.id });
    setState((prevState) => ({
      ...prevState,
      models: {
        ...prevState.models,
        id: modelId,
      },
      years: {
        ...prevState.years,
        data: res,
      },
    }));
  };
  const onYears = async ({ yearsId }: { yearsId: string }) => {
    setState((prevState) => ({
      ...prevState,
      years: {
        ...prevState.years,
        id: yearsId,
      },
    }));
  };

  return {
    onBrand,
    onModel,
    state,
    setState,
    onYears,
  };
};
