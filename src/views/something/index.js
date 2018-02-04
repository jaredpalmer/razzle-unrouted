import { h, render, Component } from 'preact';
/** @jsx h */

class Something extends Component {
  render(props, state) {
    return (
      <div class="Preact">
        <h1>Something</h1>

        <a href="/about">Home</a>
        <a href="/about">About</a>
        <a href="/something" style={{ color: 'black' }}>
          Something
        </a>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => alert('Yeahhhh')}>Click this, it works</button>
        </div>
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  let root;
  let data = window.__DATA__;
  function renderApp() {
    root = render(
      <Something {...data} />,
      document.body,
      document.body.firstElementChild
    );
  }

  // Initial render.
  renderApp();

  if (module.hot) {
    module.hot.accept();
  }
}

export default Something;
