import { html, fixture, expect } from '@open-wc/testing';
import "../basketball-league.js";

describe("BasketballLeague test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <basketball-league
        title="title"
      ></basketball-league>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
