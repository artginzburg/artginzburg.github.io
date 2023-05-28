import { BsCoin } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineExperiment } from 'react-icons/ai';

import { useLanguage } from '../../../contexts/LanguageContext';
import { ProjectKind, Project as ProjectType } from '../../../utils/data';

import './Project.scss';

// eslint-disable-next-line camelcase
const project_color_background = '151617'; // 'ddd' is a value also used in .scss files. Marked it with underscores to remind myself of that.
// eslint-disable-next-line camelcase
const projectBadgeStyle = `style=flat-square&color=${project_color_background}&labelColor=${project_color_background}`;

function getStargazersLinkFromStarsLink(
  /** @example 'https://img.shields.io/github/stars/artginzburg/PiPOSS' // => https://github.com/artginzburg/PiPOSS/stargazers */
  starsLink: string,
) {
  const splitBySlash = starsLink.split('/');
  const username = splitBySlash.at(-2)!;
  const repo = splitBySlash.at(-1)!;
  return `https://github.com/${username}/${repo}/stargazers` as const;
}

const openInNewTabProps: JSX.IntrinsicElements['a'] = {
  rel: 'noreferrer',
  target: '_blank',
};

export default function Project({ project }: { project: ProjectType }) {
  const {
    state: [language],
  } = useLanguage();

  return (
    <li className="project">
      <a className="project__link" href={project.link} {...openInNewTabProps}>
        {project.image && (
          <div className="project__image-scroller">
            <div className="project__image-container" style={project.isImageIcon ? { display: 'flex' } : undefined}>
              <img className="project__image" src={project.image} alt={project.title} style={project.isImageIcon ? { width: '30%', margin: 'auto', backgroundColor: 'transparent' } : undefined} />
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
              className="project__badge"
            />
          )}
          {project.stars && (
            <a href={getStargazersLinkFromStarsLink(project.stars)} className="project__badge-link" {...openInNewTabProps}>
              <img
                src={`${project.stars}?${projectBadgeStyle}&label=★`}
                alt={`${project.title} stars`}
                className="project__badge"
              />
            </a>
          )}
        </div>
      )}
      {project.kind === ProjectKind.Commerce ? <BsCoin className="project__kind" size={20} /> : null}
      {project.kind === ProjectKind.Education ? <FaGraduationCap className="project__kind" size={20} /> : null}
      {project.kind === ProjectKind.Experiment ? <AiOutlineExperiment className="project__kind" size={20} /> : null}
    </li>
  );
}
