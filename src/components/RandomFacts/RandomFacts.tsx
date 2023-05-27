import { useState } from 'react';
import { BiShuffle } from 'react-icons/bi';
import { mathRoundRough } from '../../functions/mathRoundRough';
import { age, insights } from '../../utils/data';
import { useStatsFetcherData } from '../../queries/statsFetcher';
import { useLanguage } from '../../contexts/LanguageContext';
import { humanizeArray } from '../../functions/humanizeArray';
import { shuffle } from '../../functions/shuffle';
import './RandomFacts.scss';

export default function RandomFacts() {
  const timeSpent = useTimeSpent();

  const { localization } = useLanguage();

  const countriesShuffledHumanized = humanizeArray(
    shuffle(localization.countries),
    localization.listLastWord,
  );

  const statsFetcherData = useStatsFetcherData();

  const facts: React.ReactNode[] = [
    <>
      {localization.randomFacts.texts.countries(countriesShuffledHumanized)}
    </>,
    <>
      {localization.randomFacts.texts.coding[0]}
      <a
        href="https://wakatime.com/@artginzburg"
        target="_blank"
        rel="noreferrer"
        className="life__link"
      >
        {mathRoundRough(statsFetcherData!.wakatimeMinutes / 60, 0)}
        {localization.randomFacts.texts.coding[1]}
      </a>
      {' '}
      {localization.randomFacts.texts.coding[2]}
    </>,
    <>
      {localization.randomFacts.texts.gaming[0]}{' '}
      {insights.steam.gamesPlayed}{' '}
      <a
        href="https://steamcommunity.com/id/artginzburg"
        target="_blank"
        rel="noreferrer"
        className="life__link"
      >
        {localization.life.texts.links.steam}
      </a>
      {localization.randomFacts.texts.gaming[1]} {timeSpent.games}% {localization.randomFacts.texts.gaming[2]}
    </>,
    <>
      {timeSpent.films}%{' '}
      {localization.randomFacts.texts.watchingFilms[0]}{' '}
      <a
        href="https://mustapp.com/@artginzburg"
        target="_blank"
        rel="noreferrer"
        className="life__link"
      >
        {localization.life.texts.links.mustapp}
      </a>
    </>,
    <>
      {localization.randomFacts.texts.photos[0]}{' '}
      <a
        href="https://www.instagram.com/art.ginzburg/"
        target="_blank"
        rel="noreferrer"
        className="life__link"
      >
        {localization.life.texts.links.instagram}
      </a>
    </>,
  ];

  const [currentFact, setCurrentFact] = useState(getRandomIntegerTo(facts.length));
  const [factsAlreadySeen, setFactsAlreadySeen] = useState<number[]>([currentFact]);

  function nextUnseenFact() {
    let newRandomFactIndex = getRandomIntegerTo(facts.length);
    while (factsAlreadySeen.includes(newRandomFactIndex)) {
      newRandomFactIndex = getRandomIntegerTo(facts.length);
    }
    const newFactsAlreadySeen = [...factsAlreadySeen, newRandomFactIndex];
    setFactsAlreadySeen(newFactsAlreadySeen);
    setCurrentFact(newRandomFactIndex);
    if (newFactsAlreadySeen.length === facts.length) {
      setFactsAlreadySeen([newRandomFactIndex]);
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <article onClick={nextUnseenFact}>
      <h2 className="life__subtitle random-facts__shuffle-container">{localization.randomFacts.title} #{currentFact + 1}/{facts.length}
        <BiShuffle className="random-facts__shuffle" />
      </h2>
      <p className="life__text">
        {facts[currentFact]}
      </p>
    </article>
  );
}

function getRandomIntegerTo(to: number) {
  return Math.floor(Math.random() * to);
}

function getTimeSpentPercents(
  time: number,
) {
  return mathRoundRough((time / age.hours) * 100);
}

const timeSpentInitial = {
  films: getTimeSpentPercents(insights.mustapp.total),
  games: getTimeSpentPercents(insights.steam.hours),
};

function useTimeSpent() {
  const [timeSpent, setTimeSpent] = useState(timeSpentInitial);

  useStatsFetcherData({ onSuccess: ((data) => {
    setTimeSpent((prev) => ({ ...prev, films: getTimeSpentPercents(data.mustappHours) }));
  }) });

  return timeSpent;
}
