import { LitElement, html, css } from "lit";

export class LeagueRecords extends LitElement {

  static styles = css`
    :host {
      display: block;
      padding: 40px;
      color: white;
    }

    h1 {
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #102a54;
      border-radius: 8px;
      overflow: hidden;
    }

    th {
      background: #1e90ff;
      padding: 12px;
      text-align: left;
    }

    td {
      padding: 12px;
      border-bottom: 1px solid #1e4ea0;
    }

    tr:hover {
      background: #1e4ea0;
    }
    .Ducks { color: orange; }
    .Toucans { color: yellow; }
    .Flamingos { color: pink; }
    .Gophers { color: lightgreen; }
  `;

  render() {
    return html`

      <h1>League Standings</h1>

      <table>
        <tr>
          <th>Team</th>
          <th>Wins</th>
          <th>Losses</th>
        </tr>

        <tr>
          <td class="Ducks">Ducks</td>
          <td>3</td>
          <td>0</td>
        </tr>

        <tr>
          <td class="Toucans">Toucans</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td class="Flamingos">Flamingos</td>
          <td>2</td>
          <td>2</td>
        </tr>

        <tr>
          <td class="Gophers">Gophers</td>
          <td>1</td>
          <td>3</td>
        </tr>

      </table>
    `;
  }
}

customElements.define("league-records", LeagueRecords);