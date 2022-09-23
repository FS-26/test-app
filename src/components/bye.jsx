import React from "react";
import Table from "./table";
class Bye extends React.Component {
  render() {
    const persons = [
      {
        nom: "Saidi",
        prenom: "Salma",
      },
      {
        nom: "Chahidane",
        prenom: "Walid",
      },
    ];
    return (
      <div>
        <h1>Bye salma</h1>
        <Table data={persons} />
      </div>
    );
  }
}
export default Bye;
