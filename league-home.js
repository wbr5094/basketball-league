import { LitElement, html, css } from "lit";

export class LeagueHome extends LitElement {

    static styles = css`
    :host {
        display: block;
    }

    .banner {
        background: linear-gradient(135deg, #0b1f3a, #1e90ff);
        padding: 80px 20px;
        text-align: center;
    }

    .banner h1 {
        font-size: 42px;
        margin-bottom: 10px;
    }

    .banner p {
        font-size: 18px;
        opacity: 0.9;
    }

    .section {
        padding: 50px 40px;
    }

    .section:nth-child(even) {
        background-color: #0f2d5c;
    }

    .section h2 {
        font-size: 26px;
        margin-bottom: 20px;
        border-left: 5px solid #1e90ff;
        padding-left: 10px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .item {
        background-color: #122f63;
        padding: 15px;
        border-radius: 6px;
    }

    .item:hover {
        background-color: #1e4ea0;
    }

    @media (max-width: 768px) {
        .banner h1 {
            font-size: 28px;
        }

        .section {
            padding: 30px 20px;
        }
    }
    `;

    render() {
        return html`        
        <div class ="banner">
            <h1>Billy's Basketball League</h1>
            <p>Spring 2026 Season Competitive Campus League</p>
    </div>

        <div class ="section">
            <h2>Upcoming Games</h2>
            <p>Ducks vs Toucans - April 5, 6:00 PM</p>
            <p>Flamingos vs Gophers - April 7 8:00 PM</p>
            <p>Ducks vs Flamingos - April 10, 7:30 PM</p>
            <p>Toucans vs Gophers - April 15, 6:30 PM</p>
            <p>Ducks vs Gopphers - April 15, 6:30 PM</p>
        </div>

        <div class="section">
            <h2>Top Teams</h2>
            <p>Ducks: 3-0</p>
            <p>Toucans: 2-1</p>
            <p>Flamingos: 2-2</p>
            <p>Gophers: 1-3</p>
        </div>

        <div class="section">
            <h2>Feautred Players</h2>
            <p>J. Smith - 22.4 PPG</p>
            <p>R. Bell - 18.7 PPG</p>
            <p>S. Carter - 15.2 PPG</p>
            <p>D. Johnson - 14.1 PPG</p>
        </div>

        <div class="section">
            <h2>About the League</h2>
            <p>The Billy Basketball League is a competitive campus league featuring four teams battling throughout the Spring 2026 season!</p>
            <p>
                Games are played weekly with standings updated in real time. Top teams advance to the championship.
            </p>
        </div>

        </div>
        `;
    }
}

customElements.define("league-home", LeagueHome);