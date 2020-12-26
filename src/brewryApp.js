import { html, LitElement } from 'lit-element';

class BrewryApp extends LitElement {
  static get properties() {
    return {
      breweries: { type: Array },
    };
  }

  async fetchBrewries() {
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    const jsonResponse = await response.json();
    this.breweries = jsonResponse;
  }
  connectedCallback() {
    super.connectedCallback();

    if (!this.breweries) {
      this.fetchBrewries();
    }
  }

  render() {
    return html`${JSON.stringify(this.breweries, null, 2)}`;
  }
}

customElements.define('brew-app', BrewryApp);
