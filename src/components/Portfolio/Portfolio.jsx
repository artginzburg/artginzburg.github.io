import { useLanguage } from '../../contexts/LanguageContext';
import { splitIntoGroups } from '../../functions/splitIntoGroups';
import { useTitle } from '../../hooks/useTitle';
import { projects, insights, statsUrl } from '../../utils/data';

import Project from './Project/Project';
import StatsBadge from './StatsBadge/StatsBadge';

import './Portfolio.scss';

const categories = splitIntoGroups(projects, 'category');

const statsBadgeStyle = 'style=flat-square&labelColor=rgba(0,0,0,0)&color=000';

export default function Portfolio() {
  const { localization } = useLanguage();

  useTitle(localization.titles.portfolio);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__stats">
        <StatsBadge
          href="https://github.com/artginzburg"
          src={`https://img.shields.io/badge/dynamic/json?url=${statsUrl}&query=githubDownloads&${statsBadgeStyle}&logo=github&label=${localization.badges.github.downloads}`}
          alt={localization.badges.github.downloads}
        />
        <StatsBadge
          href="https://www.npmjs.com/~artginzburg"
          src={`https://img.shields.io/badge/dynamic/json?url=${statsUrl}&query=npmDownloads&${statsBadgeStyle}&logo=npm&label=${localization.badges.npm}`}
          alt={localization.badges.npm}
        />
        <StatsBadge
          href="https://github.com/artginzburg"
          src={`https://img.shields.io/github/stars/artginzburg?${statsBadgeStyle}&logo=github&label=${localization.badges.github.stars}`}
          alt={localization.badges.github.stars}
        />
      </div>

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
