import { shuffle } from '../../functions/shuffle';
import { humanizeArray } from '../../functions/humanizeArray';
import { mathRoundRough } from '../../functions/mathRoundRough';

import { countries, insights, age } from '../../utils/data';

import './Life.scss';

// TODO: Limit the badges size everywhere on the website (in case it can't load, alternative text becomes about the window size large)

const countriesShuffled = shuffle(countries);

const timeSpent = {
  films: mathRoundRough((insights.mustapp.total / age.hours) * 100),
  games: mathRoundRough((insights.steam.hours / age.hours) * 100),
};

export default function Life() {
  return (
    <section className="life">
      <article>
        <h2 className="life__subtitle">Story</h2>
        <p className="life__text">
          I've been to {humanizeArray(countriesShuffled)} to bring you the user experience learned
          from the architecture, culture, and urban planning of many cities. Technical knowledge is
          just half of the package.
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
          Moving further with the stats, I connected to WakaTime on August 29 2021 and spent{' '}
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
          coding since then.
        </p>
        <p className="life__text">
          This website section is not complete 'cause everyone should sleep sometimes...
        </p>
      </article>
    </section>
  );
}
