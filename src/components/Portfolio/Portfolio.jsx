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
            <ul>
              {categoryProjects.map((project, projectIndex) => {
                return (
                  <li key={projectIndex}>
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
            </ul>
          </article>
        );
      })}
    </section>
  );
}
