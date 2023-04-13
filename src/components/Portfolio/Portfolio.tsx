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
    <section id="portfolio" className="portfolio">
      {Object.keys(categories).map((category) => (
        <article key={category}>
          <h2 className="portfolio__subtitle">{localization.portfolio[category]}</h2>
          <ul className="portfolio__projects">
            {categories[category].map((project) => (
              <Project project={project} key={project.title} />
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
