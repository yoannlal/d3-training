// Importer les fichiers que vous souhaitez executer
import { useEffect } from "react";

// EX: import exercice1 from "./exercices/data/exercice1"
import exercice from "./exercices/day1/exercice1";

function D3Container() {
  useEffect(() => {
    document.getElementById("d3-container").innerHTML = "";

    //Exécuter la fonction ici
    // Exemple exercice1();
    exercice();
  });

  return <div />;
}

export default D3Container;
