import { useContext, useState } from "react";
import { FipeContext } from "../../context/fipe";
import { useSelectCar } from "../../hooks/useSelectCar";
import { formattedData } from "../../utils/model";
import { Autocomplete, Button, TextField } from "../index";

type FormProps = {};

type SelectProps = {
  label: string;
  value: string;
};

export const Form: React.FC<FormProps> = () => {
  const { state, onBrand, onModel, onYears } = useSelectCar();
  const { handleFipeSubmit, error, setError } = useContext(FipeContext);
  const [selectedBrand, setSelectedBrand] = useState<SelectProps | null>(null);
  const [selectedModel, setSelectedModel] = useState<SelectProps | null>(null);
  const [selectedYear, setSelectedYear] = useState<SelectProps | null>(null);

  const brands = formattedData(state.brand.data);
  const models = formattedData(state.models.data);
  const years = formattedData(state.years.data);

  const handleBrandChange = (data: SelectProps | null) => {
    setSelectedBrand(data);
    onBrand(data?.value || "");
    setSelectedModel(null);
    if (error) setError(null);
  };

  const handleModelChange = (data: SelectProps | null) => {
    onModel({ modelId: data?.value || "" });
    setSelectedModel(data);
    setSelectedYear(null);
    if (error) setError(null);
  };

  const handleYearChange = (data: SelectProps | null) => {
    setSelectedYear(data);
    onYears({ yearsId: data?.value || "" });
    if (error) setError(null);
  };

  return (
    <>
      <Autocomplete
        style={{
          width: "100%",
        }}
        options={brands}
        onChange={(_, data) => handleBrandChange(data)}
        value={selectedBrand}
        renderInput={(params) => <TextField {...params} label="Marca" />}
      />
      <Autocomplete
        style={{
          width: "100%",
        }}
        value={selectedModel}
        options={models}
        onChange={(_, data) => handleModelChange(data)}
        renderInput={(params) => <TextField {...params} label="Modelo" />}
      />
      {selectedModel ? (
        <Autocomplete
          style={{
            width: "100%",
          }}
          options={years}
          value={selectedYear}
          onChange={(_, data) => handleYearChange(data)}
          renderInput={(params) => <TextField {...params} label="Ano" />}
        />
      ) : null}
      {error && <p>{`Não foi possivel encontrar o modelo especifico`}</p>}
      <Button
        onClick={() =>
          handleFipeSubmit({
            brandId: selectedBrand?.value || "",
            modelId: selectedModel?.value || "",
            yearId: selectedYear?.value || "",
          })
        }
        variant={"contained"}
      >
        Consultar preço
      </Button>
    </>
  );
};
