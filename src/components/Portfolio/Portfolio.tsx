import { useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';
import { splitIntoGroups } from '../../functions/splitIntoGroups';
import { useTitle } from '../../hooks/useTitle';
import { projects, insights } from '../../utils/data';
import { classNames } from '../../functions/toClassNames';

import Project from './Project/Project';

import './Portfolio.scss';

const categories = splitIntoGroups(projects, 'category');

export default function Portfolio() {
  const { localization } = useLanguage();

  useTitle(localization.titles.portfolio);

  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <section id="portfolio" className="portfolio">
      <nav className="portfolio__category-buttons">
        <button type="button" {...classNames(['portfolio__category-button', selectedCategory === undefined && 'portfolio__category-button_selected'])} onClick={() => { setSelectedCategory(undefined); }} style={{ marginRight: `${5 * 2}px` }}>
          {localization.portfolio.all}
        </button>
        {Object.keys(categories).map((categoryName) => (
          <button key={categoryName} type="button" {...classNames(['portfolio__category-button', selectedCategory === categoryName && 'portfolio__category-button_selected'])} onClick={() => { setSelectedCategory(categoryName); }}>
            {localization.portfolio[categoryName]}
          </button>
        ))}
      </nav>
      <ul className="portfolio__projects">
        {selectedCategory ? categories[selectedCategory].sort((a, b) => (a.kind - b.kind)).map((project) => (
          <Project project={project} key={project.title} />
        )) : projects.sort((a, b) => (a.kind - b.kind)).map((project) => <Project project={project} key={project.title} />)}
      </ul>

      <p className="portfolio__quantity">
        {projects.length} of {insights.github.totalRepos} projects listed here
      </p>
    </section>
  );
}
