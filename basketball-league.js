import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./league-home.js";
import "./league-schedule.js";
import "./league-records.js";
import "./league-players.js";

export class BasketballLeague extends DDDSuper(I18NMixin(LitElement)) {

static get tag() {
  return "basketball-league";
}

static properties = {
  page: {type: String}
};

  constructor() {
    super();
    this.page = "home";
    this.changePage = this.changePage.bind(this);
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #0b1f3a;
      font-family: Arial, sans-serif;
      color: white;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #102a54;
      padding: 20px 40px;
      border-bottom: 2px solid #071ecfdb;
    }
    
    .logo {
      font-size: 28px;
      font-weight: bold;
    }

    .navbar {
      display: flex;
      gap: 15px;
    }

    .menu-item {
      position: relative;
    }

    .menu-item button {
      background-color: #1e90ff;
      color: white;
      border: none;
      padding: 10px 16px;
      font-size: 15px;
      border-radius: 6px;
      cursor: pointer;
    }

    .menu-item button:hover {
      background: #3aa0ff;
    }

    .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      background-color: #102a54;
      padding: 8px;
      border-radius: 6px;
    }

    .dropdown button {
      display: block;
      width: 100%;
      margin: 6px 0;
      padding: 12px;
      font-size: 16px;
    }

    .menu-item:hover .dropdown {
      display: block;
    }

    .dropdown button {
      width: 100%;
      margin: 4px 0;
      padding: 8px;
    }

    .content {
      padding: 0;
    }
  `;

  changePage(e) {
    this.page = e.target.dataset.page;
  }

  renderPage() {
    switch (this.page) {
      case "schedule":
        return html`<league-schedule></league-schedule>`;
      case "records":
        return html`<league-records></league-records>`;
      case "players":
        return html`<league-players></league-players>`;
      case "home":
      default:
        return html`<league-home></league-home>`;
    }
  }

  render() {
    return html`
    <header class = "header">
     
      <div class ="logo">
        Billy's Basketball league
      </div>

    <nav class="navbar">

      <div class="menu-item">
        <button data-page="home" @click=${this.changePage}>Home</button>
      </div>

      <div class="menu-item">
        <button>Schedule ▼</button>
        <div class="dropdown">
          <button data-page="schedule" @click=${this.changePage}>
            View Schedule
          </button>
          <button> Upcoming Games </button>
          <button> Playoff Standings </button>
        </div>
      </div>

      <div class="menu-item">
        <button>Standings ▼</button>
        <div class ="dropdown">
          <button data-page="records" @click=${this.changePage}>
            Team Records
          </button>
          <button> Division Standings </button>
          <button> League History </button>
        </div>
      </div>

      <div class="menu-item">
        <button>Players ▼</button>
        <div class="dropdown">
          <button data-page="players" @click=${this.changePage}>
        Top Players  
        </button>
        <button> Player Stats </button>
        <button> Rosters </button>
        </div>
      </div>
    </nav>
    </header>

    <div class="content">
      ${this.renderPage()}
    </div>
    `;
  }

}
globalThis.customElements.define(BasketballLeague.tag, BasketballLeague);