import { useLanguage } from '../../contexts/LanguageContext';
import { splitIntoGroups } from '../../functions/splitIntoGroups';
import { useTitle } from '../../hooks/useTitle';
import { projects } from '../../utils/data';

import './Portfolio.scss';

const categories = splitIntoGroups(projects, 'category');

const publicGithubReposQuantity = 28;

export default function Portfolio() {
  const {
    localization,
    state: [lang],
  } = useLanguage();

  useTitle(localization.titles.portfolio);

  return (
    <section className="portfolio">
      <div className="portfolio__stats">
        <a href="https://www.npmjs.com/~artginzburg" target="_blank" rel="noreferrer">
          <img
            src={`https://img.shields.io/endpoint?url=https://artginzburg.runkit.io/npmstalk/branches/master/artginzburg&style=flat-square&labelColor=rgba(0,0,0,0)&color=000&label=${localization.badges.npm}`}
            alt="My NPM downloads"
            className="portfolio__stats-badge"
          />
        </a>

        <a href="https://github.com/artginzburg" target="_blank" rel="noreferrer">
          <img
            src={`https://img.shields.io/github/stars/artginzburg?style=flat-square&labelColor=rgba(0,0,0,0)&color=000&logo=github&label=${localization.badges.github}`}
            alt="My GitHub stars"
            className="portfolio__stats-badge"
          />
        </a>
      </div>

      {Object.keys(categories).map((category, categoryIndex) => (
        <article key={categoryIndex}>
          <h2 className="portfolio__subtitle">{localization.portfolio[category]}</h2>
          <ul className="portfolio__projects">
            {categories[category].map((project, projectIndex) => (
              <li className="portfolio__project" key={projectIndex}>
                <a
                  className="portfolio__project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.image && (
                    <div className="portfolio__project-image-container">
                      <img
                        className="portfolio__project-image"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  )}

                  <div className="portfolio__project-container">
                    <p className="portfolio__project-title">{project.title}</p>
                    <p className="portfolio__project-year">{project.year}</p>
                  </div>
                </a>
                <p className="portfolio__project-subtitle">{project.subtitle}</p>
                <p className="portfolio__project-text">{project.description[lang]}</p>

                {(project.downloads || project.stars) && (
                  <div className="portfolio__project-badges">
                    {project.downloads && (
                      <img
                        src={`${project.downloads}?label=▼&style=flat-square&color=ddd&labelColor=ddd`}
                        alt={`${project.title} downloads`}
                      />
                    )}
                    {project.stars && (
                      <img
                        src={`${project.stars}?color=ddd&label=★&style=flat-square&labelColor=ddd`}
                        alt={`${project.title} stars`}
                      />
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}

      <p className="portfolio__quantity">
        {projects.length} of {publicGithubReposQuantity} projects listed here
      </p>
    </section>
  );
}
