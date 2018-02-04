import { h, render, Component } from 'preact';
/** @jsx h */

class Home extends Component {
  render(props, state) {
    return (
      <div class="Preact">
        <h1>{props.title}</h1>
        <a href="/about" style={{ color: 'black' }}>
          Home
        </a>
        <a href="/about">About</a>
        <a href="/something">Something</a>
        love this thing alreadyasdfsasasasdasdfasdfasdf it's dope ness
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  let data = window.__DATA__;
  let root;
  function renderApp() {
    root = render(
      <Home {...data} />,
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

export default Home;
