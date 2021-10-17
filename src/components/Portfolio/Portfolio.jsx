import { useLanguage } from '../../contexts/LanguageContext';

import { projects } from '../../data';

import './Portfolio.scss';

function splitIntoGroups(inputArray) {
  return inputArray.reduce((resultArray, item) => {
    const chunkIndex = item.category;

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, {});
}

const categories = splitIntoGroups(projects);

export default function Portfolio() {
  const {
    localization,
    state: [lang],
  } = useLanguage();

  return (
    <section className="portfolio">
      {Object.keys(categories).map((category, categoryIndex) => {
        const categoryProjects = categories[category];

        return (
          <article key={categoryIndex}>
            <h2 className="portfolio__subtitle">{localization.portfolio[category]}</h2>
            <ul className="portfolio__projects">
              {categoryProjects.map((project, projectIndex) => {
                return (
                  <li className="portfolio__project" key={projectIndex}>
                    <a
                      className="portfolio__project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.image && (
                        <img
                          className="portfolio__project-image"
                          src={project.image}
                          alt={project.title}
                        />
                      )}
                      <div className="portfolio__project-container">
                        <p className="portfolio__project-title">{project.title}</p>
                        <p className="portfolio__project-year">{project.year}</p>
                      </div>
                    </a>
                    <p className="portfolio__project-subtitle">{project.subtitle}</p>
                    <p className="portfolio__project-text">{project.description[lang]}</p>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </section>
  );
}
