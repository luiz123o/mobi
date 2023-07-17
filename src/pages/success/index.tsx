import { Box, Typography } from "@mui/material";
import { DsCard } from "../../components/DsCard";
import { useContext } from "react";
import { FipeContext } from "../../context/fipe";
import Link from "next/link";

const Success = () => {
  const { data } = useContext(FipeContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "4rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#dcf5f2",
          margin: "4rem",
        }}
      >
        <Link href="/">Voltar</Link>
        <Typography variant="h6">Tabela Fipe: {`${data?.Marca}`}</Typography>
        <div
          style={{
            borderRadius: "5rem",
            backgroundColor: "#00A38C",
            padding: "0.4rem",
            maxWidth: "10rem",
            color: "#fff",
          }}
        >
          <Typography variant="h6">{`${data?.Valor}`}</Typography>
        </div>
        <Typography variant="caption">
          Este é o preço da compra do veiculo
        </Typography>
      </Box>
    </div>
  );
};

export default Success;
