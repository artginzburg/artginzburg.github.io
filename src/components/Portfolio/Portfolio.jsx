import { useLanguage } from '../../contexts/LanguageContext';

import { projects } from '../../data';

import './Portfolio.scss';

export default function Portfolio() {
  const {
    // localization,
    state: [lang],
  } = useLanguage();

  // todo: group projects by category
  // <article>
  //   <h2 className="portfolio__subtitle">Category</h2>
  //   <ul>
  //     project1
  //     project2
  //   </ul>
  // </article>

  return (
    <section className="portfolio">
      {projects.map((project) => {
        return (
          <li>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.title}
            </a>
            <p>
              {project.year}, {project.subtitle}
            </p>
            <p>{project.description[lang]}</p>
          </li>
        );
      })}
    </section>
  );
}
