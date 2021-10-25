import { useLanguage } from '../../../contexts/LanguageContext';

import './Project.scss';

export default function Project({ project }) {
  const {
    state: [language],
  } = useLanguage();

  return (
    <li className="project">
      <a className="project__link" href={project.link} target="_blank" rel="noreferrer">
        {project.image && (
          <div className="project__image-scroller">
            <div className="project__image-container">
              <img className="project__image" src={project.image} alt={project.title} />
            </div>
          </div>
        )}

        <div className="project__container">
          <p className="project__title">{project.title}</p>
          <p className="project__year">{project.year}</p>
        </div>
      </a>
      <p className="project__subtitle">{project.subtitle}</p>
      <p className="project__text">{project.description[language]}</p>

      {(project.downloads || project.stars) && (
        <div className="project__badges">
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
  );
}
