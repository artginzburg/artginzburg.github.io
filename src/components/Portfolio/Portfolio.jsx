import { useLanguage } from '../../contexts/LanguageContext';
import { splitIntoGroups } from '../../functions/splitIntoGroups';
import { useTitle } from '../../hooks/useTitle';
import { projects, insights } from '../../utils/data';

import Project from './Project/Project';

import './Portfolio.scss';

const categories = splitIntoGroups(projects, 'category');

export default function Portfolio() {
  const { localization } = useLanguage();

  useTitle(localization.titles.portfolio);

  return (
    <section className="portfolio">
      <div className="portfolio__stats">
        <a href="https://www.npmjs.com/~artginzburg" target="_blank" rel="noreferrer">
          <img
            src={`https://img.shields.io/endpoint?url=https://artginzburg.runkit.io/npmstalk/branches/master/artginzburg&style=flat-square&labelColor=rgba(0,0,0,0)&color=000&label=${localization.badges.npm}`}
            alt={localization.badges.npm}
            className="portfolio__stats-badge"
          />
        </a>

        <a href="https://github.com/artginzburg" target="_blank" rel="noreferrer">
          <img
            src={`https://img.shields.io/github/stars/artginzburg?style=flat-square&labelColor=rgba(0,0,0,0)&color=000&logo=github&label=${localization.badges.github}`}
            alt={localization.badges.github}
            className="portfolio__stats-badge"
          />
        </a>
      </div>

      {Object.keys(categories).map((category, categoryIndex) => (
        <article key={categoryIndex}>
          <h2 className="portfolio__subtitle">{localization.portfolio[category]}</h2>
          <ul className="portfolio__projects">
            {categories[category].map((project, projectIndex) => (
              <Project project={project} key={projectIndex} />
            ))}
          </ul>
        </article>
      ))}

      <p className="portfolio__quantity">
        {projects.length} of {insights.github.totalRepos} projects listed here
      </p>
    </section>
  );
}
