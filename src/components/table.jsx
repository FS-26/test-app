import { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.nom}</td>
                <td>{person.prenom}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
