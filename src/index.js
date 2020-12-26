import './todo.js';
import './brewryApp.js';
import { html, render } from 'lit-html';
let rootElement = () => html`
  <todo-app></todo-app>
  <brew-app></brew-app>
`;
render(rootElement(), document.getElementById('container'));
