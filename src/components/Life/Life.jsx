import { shuffle } from '../../functions/shuffle';
import { humanizeArray } from '../../functions/humanizeArray';
import { mathRoundRough } from '../../functions/mathRoundRough';

import { insights, age } from '../../utils/data';

import './Life.scss';
import { useLanguage } from '../../contexts/LanguageContext';

const timeSpent = {
  films: mathRoundRough((insights.mustapp.total / age.hours) * 100),
  games: mathRoundRough((insights.steam.hours / age.hours) * 100),
};

export default function Life() {
  const { localization } = useLanguage();

  const countriesShuffledHumanized = humanizeArray(
    shuffle(localization.countries),
    localization.listLastWord,
  );

  return (
    <section className="life">
      <article>
        <h2 className="life__subtitle">{localization.life.story}</h2>
        <p className="life__text">
          {localization.life.texts.countries(countriesShuffledHumanized)}
        </p>
        <p className="life__text">
          But let's step aside from that to take a look at what I do for fun. Mainly, it's either
          playing these {insights.steam.gamesPlayed}{' '}
          <a
            href="https://steamcommunity.com/id/artginzburg"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            Computer games
          </a>{' '}
          ({timeSpent.games}%) or taking{' '}
          <a
            href="https://www.instagram.com/art.ginzburg/"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            Photos
          </a>
          . Also, {timeSpent.films}% of my life was dedicated to watching these{' '}
          <a
            href="https://mustapp.com/@artginzburg"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            Movies
          </a>
          .
        </p>
        <p className="life__text">
          Moving further with the stats, I spent{' '}
          <a
            href="https://wakatime.com/@artginzburg"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            <img
              alt="Total time coded"
              src="https://wakatime.com/badge/user/992f2c32-f468-4d6e-a817-ac32f0029edf.svg"
              className="life__badge"
            />
          </a>{' '}
          coding since August 29 2021.
        </p>
      </article>
      <article>
        <h2 className="life__subtitle">{localization.life.education}</h2>
        <ul>
          <li className="life__text">
            <p>
              <a
                href="https://praktikum.yandex.ru"
                target="_blank"
                rel="noreferrer"
                className="life__link"
              >
                Yandex.Praktikum
              </a>{' '}
              | Jan, 2021 - Oct, 2021
            </p>
            <p>
              Web-Developer{' '}
              <a
                href="https://github.com/artginzburg/yandex.praktikum-portfolio"
                target="_blank"
                rel="noreferrer"
                className="life__link"
              >
                Portfolio
              </a>
            </p>
          </li>
          <li className="life__text">
            <p>
              <a
                href="https://www.ibo.org/programmes/diploma-programme/"
                target="_blank"
                rel="noreferrer"
                className="life__link"
              >
                International Baccalaureate® (IB) Diploma Programme (DP)
              </a>{' '}
              | Sep, 2018 - Jun, 2020
            </p>
            <p>
              Film · Computer Science · Business & Management{' '}
              <a
                href="https://artginzburg.github.io/CASProject/"
                target="_blank"
                rel="noreferrer"
                className="life__link"
              >
                CAS Project
              </a>
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
