import './Portfolio.scss';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <article>
        <h2 className="portfolio__subtitle">Фронтенд</h2>
        <ul>
          <li>
            <a href="https://artginzburg.github.io/CASProject/" target="_blank" rel="noreferrer">
              3d school map
            </a>
          </li>
          <li>
            <a href="https://deeplomka.nomoredomains.club" target="_blank" rel="noreferrer">
              Movies Explorer
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
