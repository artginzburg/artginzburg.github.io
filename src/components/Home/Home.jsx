import avatar from '../../images/avatar.jpg';

import './Home.scss';

export default function Home() {
  return (
    <section className="home">
      {/* <svg className="svgFilter">
          <filter id="noise">
            <feTurbulence id="turbulence">
              <animate
                attributeName="baseFrequency"
                dur="1s"
                values="0.9 0.9; 0.8 0.8; 0.9 0.9;"
                repeatCount="indefinite"
              />
              <feDisplacementMap in="SourceGraphic" scale="60" />
            </feTurbulence>
          </filter>
        </svg>
        <div className="backgroundNoise" /> */}

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
