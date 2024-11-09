// App.tsx
//import React from "react";
import { Button } from "@/components/ui/button"; // Importação de um componente
import { ButtonAlert } from "@/components/ui/ButtonAlert"; // Importação nomeada

const App = () => {
  return (
    <div className="App">
      <h1>Testando o Botão do ShadCN UI</h1>
      <Button variant="outline">Entrar</Button>

      <ButtonAlert />
    </div>
  );
};

// Exportação default do App
export default App;
