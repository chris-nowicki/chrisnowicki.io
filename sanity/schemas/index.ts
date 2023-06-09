import tech from './tech'
import projects from './projects'
import professionalExperience from './professionalExperience'
import education from './education'
import home from './pages/home'
import about from './pages/about'

// Singleton document type
import settings from './singletons/settings'
import resume from './pages/resume'

const singletons = [settings, resume]

export const schemaTypes = [
  ...singletons,
  tech,
  projects,
  professionalExperience,
  education,
  home,
  about,
]
