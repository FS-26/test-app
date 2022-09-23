import { Component } from "react";
import Table from "./table";

class Welcome extends Component {
  render() {
    const persons = [
      {
        nom: "El Hadak",
        prenom: "Amine",
      },
      {
        nom: "El Baidak",
        prenom: "Houda",
      },
      {
        nom: "Fennir",
        prenom: "Adnane",
      },
      {
        nom: "Bayane",
        prenom: "Rim",
      },
    ];
    return (
      <div>
        <h2>
          Welcome to React session {this.props.nom} {this.props.prenom}
        </h2>
        <Table data={persons} />
      </div>
    );
  }
}
export default Welcome;
