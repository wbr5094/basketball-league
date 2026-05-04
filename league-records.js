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
      background: var(--ddd-theme-default-nittanyNavy);
      border-radius: 8px;
      overflow: hidden;
    }

    th {
      background: var(--ddd-theme-default-beaverBlue);
      padding: 12px;
      text-align: left;
    }

    td {
      padding: 12px;
      border-bottom: 1px solid var(--ddd-theme-default-beaver70);
    }

    tr:hover {
      background: var(--ddd-theme-default-beaver80);
    }
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