import { useEffect, useState } from 'react';

import { shuffle } from '../../functions/shuffle';
import { humanizeArray } from '../../functions/humanizeArray';
import { mathRoundRough } from '../../functions/mathRoundRough';

import { insights, age, statsUrl } from '../../utils/data';

import './Life.scss';
import { useLanguage } from '../../contexts/LanguageContext';

function getTimeSpentPercents(
  /** @type {number} */
  time,
) {
  return mathRoundRough((time / age.hours) * 100);
}

const timeSpentInitial = {
  films: getTimeSpentPercents(insights.mustapp.total),
  games: getTimeSpentPercents(insights.steam.hours),
};

function useTimeSpent() {
  const [timeSpent, setTimeSpent] = useState(timeSpentInitial);

  useEffect(() => {
    fetch(statsUrl).then((response) => (response.ok ? response : Promise.reject(response))).then((data) => data.json()).then((jsonData) => {
      setTimeSpent((prev) => ({
        ...prev,
        films: getTimeSpentPercents(jsonData.mustappHours),
      }));
    });
  }, []);

  return timeSpent;
}

export default function Life() {
  const timeSpent = useTimeSpent();

  const { localization } = useLanguage();

  const countriesShuffledHumanized = humanizeArray(
    shuffle(localization.countries),
    localization.listLastWord,
  );

  return (
    <section className="life">
      <article>
        <h2 id="life" className="life__subtitle">
          {localization.life.story}
        </h2>
        <p className="life__text">
          {localization.life.texts.countries(countriesShuffledHumanized)}
        </p>
        <p className="life__text">
          {localization.life.texts.stats[0]} {insights.steam.gamesPlayed}{' '}
          <a
            href="https://steamcommunity.com/id/artginzburg"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            {localization.life.texts.links.steam}
          </a>{' '}
          ({timeSpent.games}%) {localization.life.texts.stats[1]}
          <a
            href="https://www.instagram.com/art.ginzburg/"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            {localization.life.texts.links.instagram}
          </a>
          {localization.life.texts.stats[2]} {timeSpent.films}% {localization.life.texts.stats[3]}
          <a
            href="https://mustapp.com/@artginzburg"
            target="_blank"
            rel="noreferrer"
            className="life__link"
          >
            {localization.life.texts.links.mustapp}
          </a>
          .
        </p>
        <p className="life__text">
          {localization.life.texts.stats[4]}
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
          </a>
          {localization.life.texts.stats[5]}
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
                {localization.life.texts.links.practicum}
              </a>
              {localization.life.texts.education.practicum.dates}
            </p>
            <p>
              {localization.life.texts.education.practicum.faculty}
              <a
                href="https://github.com/artginzburg/yandex.praktikum-portfolio"
                target="_blank"
                rel="noreferrer"
                className="life__link life__link_button"
              >
                {localization.life.texts.education.practicum.project}
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
                {localization.life.texts.links.ibdp}
              </a>
              {localization.life.texts.education.ibdp.dates}
            </p>
            <p>
              {localization.life.texts.education.ibdp.faculty}
              <a
                href="https://artginzburg.github.io/CASProject/"
                target="_blank"
                rel="noreferrer"
                className="life__link life__link_button"
              >
                {localization.life.texts.education.ibdp.project}
              </a>
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
