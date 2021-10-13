import avatar from '../../images/avatar.jpg';

import './Home.scss';

export default function Home() {
  return (
    <section className="home">
      <img src={avatar} className="home__logo" alt="avatar" />
      <p>Я Арт, пишу код</p>
      <a
        className="home__link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </section>
  );
}
