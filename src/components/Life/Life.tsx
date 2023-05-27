import './Life.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import RandomFacts from '../RandomFacts/RandomFacts';

export default function Life() {
  const { localization } = useLanguage();

  return (
    <section className="life">
      <RandomFacts />
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
              <span className="life__links">
                <a
                  href="https://github.com/artginzburg/yandex.praktikum-portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="life__link life__link_button"
                >
                  {localization.life.texts.education.practicum.project}
                </a>
                <a
                  href="./education/Praktikum-Diploma.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="life__link life__link_button"
                >
                  {localization.life.texts.education.practicum.diploma}
                </a>
              </span>
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
