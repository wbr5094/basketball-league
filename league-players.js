import { LitElement, html, css } from "lit";

export class LeaguePlayers extends LitElement {

  static styles = css`
    :host {
      display: block;
      padding: 40px;
      color: white;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 25px;
    }

    .card {
        background: #102a54;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
        transform:  translateY(-6px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.4);
    }

       .image-container {
      width: 100%;
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0b1f3a;
    }

    img {
      max-height: 90%;
      max-width: 90%;
      object-fit: contain;
    }

    .info {
      padding: 15px;
      text-align: center;
    }

    .name {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .team {
      font-size: 14px;
      opacity: 0.8;
    }
  `;

  render() {
    return html`

      <h1>Players</h1>

      <div class="grid">

        <div class="card">
          <img src="https://png.pngtree.com/png-clipart/20241216/original/pngtree-sport-professional-basketball-player-preparing-to-attack-on-a-white-background-png-image_17920231.png" />
          <div class="name">J. Smith</div>
          <div class="team">Ducks</div>
        </div>

        <div class="card">
          <img src="https://png.pngtree.com/png-clipart/20240914/original/pngtree-professional-male-basketball-player-png-image_16008532.png" />
          <div class="name">R. Bell</div>
          <div class="team">Toucans</div>
        </div>

        <div class="card">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/047/650/554/small/african-american-basketball-player-dribbling-during-game-png.png" />
          <div class="name">S. Carter</div>
          <div class="team">Flamingos</div>
        </div>

        <div class="card">
          <img src="https://png.pngtree.com/png-clipart/20240914/original/pngtree-professional-male-basketball-player-png-image_16008533.png" />
          <div class="name">D. Johnson</div>
          <div class="team">Gophers</div>
        </div>

      </div>
    `;
  }
}

customElements.define("league-players", LeaguePlayers);