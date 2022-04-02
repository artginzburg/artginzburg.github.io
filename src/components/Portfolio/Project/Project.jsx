import { useLanguage } from '../../../contexts/LanguageContext';

import './Project.scss';

const project_color_background = 'ddd';
const projectBadgeStyle = `style=flat-square&color=${project_color_background}&labelColor=${project_color_background}`;

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
              src={`${project.downloads}?${projectBadgeStyle}&label=▼`}
              alt={`${project.title} downloads`}
            />
          )}
          {project.stars && (
            <img
              src={`${project.stars}?${projectBadgeStyle}&label=★`}
              alt={`${project.title} stars`}
            />
          )}
        </div>
      )}
    </li>
  );
}