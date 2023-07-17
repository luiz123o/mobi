import { Button } from "@mui/material";

import type { NextPage } from "next";
import { DsCard } from "../components/DsCard";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DsCard>
        <Header
          title="Tabela Fipe"
          description="Consulte o valor de um veículo de forma gratuita"
        />
        <Form />
      </DsCard>
    </main>
  );
};

export default Home;
