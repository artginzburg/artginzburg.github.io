import avatar from './images/avatar.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="avatar" />
        <p>Я Арт, пишу код</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
