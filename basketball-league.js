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
    .navbar {
      display: inline-flex;
      gap: 20px;
      background-color: #222;
      padding: 15px 25px;
    }

    .menu-item {
      position: relative;
    }

    .menu-item button {
      background: #444;
      color: white;
      border: none;
      padding: 12px 18px;
      cursor: pointer;
      border-radius: 6px;
    }

    .menu-item button:hover {
      background: #666;
    }

    .dropdown {
      display: none;
      position: absolute;
      top: 45px;
      background: #333;
      padding: 8px;
      min-width: 160px;
      border-radius: 6px;
    }

    .dropdown button {
      display: block;
      width: 100%;
      margin: 4px 0;
      padding: 10px;
      font-size: 15px;
    }

    .menu-item:hover .dropdown {
      display: block;
    }

    .content {
      padding: 20px;
      font-size: 18px;
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
        return html`
        <league-home></league-home>
      `;
    }
  }

  render() {
    return html`
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
        </div>
      </div>

      <div class="menu-item">
        <button>Standings ▼</button>
        <div class ="dropdown">
          <button data-page="records" @click=${this.changePage}>
            Team Records
          </button>
        </div>
      </div>

      <div class="menu-item">
        <button>Players ▼</button>
        <div class="dropdown">
          <button data-page="players" @click=${this.changePage}>
          </button>
        </div>
      </div>
    </nav>
    <div class="content">
      ${this.renderPage()}
    </div>
    `;
  }

}
globalThis.customElements.define(BasketballLeague.tag, BasketballLeague);