import { LitElement, html, css } from "lit";

export class LeagueSchedule extends LitElement {

    static properties = {
        currentDate: { type: Object},
        games: {type: Array},
        selectedGame: {type: Object}
    };

    constructor() {
        super();
        this.currentDate = new Date();
        this.games = [];
        this.selectedGame = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.loadGames();
    }

    async loadGames() {
        const response = await fetch("./schedule.json");
        const data = await response.json();
        this.games = data.games;
    }

    static styles = css`
    :host {
        display: block;
        padding: 30px;
        color: white;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(7,1fr);
        gap: 10px;
    }

    .day {
        min-height: 100px;
        background: #122F63;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
    }

    .day:hover {
        background: #1e4ea0;
    }

    .game {
        margin-top: 5px;
        padding: 4px;
        border-radius: 4px;
        font-size: 13px;
    }

    .played {
        background: #28a745;
    }

    .upcoming {
        background: #1e90ff;
    }

    .details {
        margin-top: 20px;
        padding: 15px;
        background: #102a54;
        border-radius: 6px;
    }
    `;

      changeMonth(offset) {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    this.currentDate = newDate;
  }

  getGameForDay(day, month, year) {
    return this.games.find(g => {
      const d = new Date(g.date);
      return (
        d.getDate() === day &&
        d.getMonth() === month &&
        d.getFullYear() === year
      );
    });
  }

  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(html`<div></div>`);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const game = this.getGameForDay(day, month, year);

      cells.push(html`
        <div class="day" @click=${() => this.selectedGame = game}>
          <div>${day}</div>

          ${game
            ? html`
                <div class="game ${game.played ? "played" : "upcoming"}">
                  <span class="${game.home}">${game.home}</span> vs 
                  <span class="${game.away}">${game.away}</span>
                </div>
              `
            : ""}
        </div>
      `);
    }

    return cells;
  }

  render() {
    const monthName = this.currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric"
    });

    return html`
      <h1>${monthName}</h1>

      <button @click=${() => this.changeMonth(-1)}>Prev</button>
      <button @click=${() => this.changeMonth(1)}>Next</button>

      <div class="calendar">
        ${this.renderCalendar()}
      </div>

      ${this.selectedGame
        ? html`
            <div class="details">
              <h3>Game Details</h3>
              <p>${this.selectedGame.home} vs ${this.selectedGame.away}</p>
              <p>
                ${this.selectedGame.played
                  ? "Final Score: " + this.selectedGame.score
                  : "Upcoming Game"}
              </p>
            </div>
          `
        : ""}
    `;
  }
}

customElements.define("league-schedule", LeagueSchedule);