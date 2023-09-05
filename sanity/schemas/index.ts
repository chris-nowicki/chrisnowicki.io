import tech from './tech'
import projects from './projects'
import professionalExperience from './professionalExperience'
import education from './education'
import home from './pages/home'


// Singleton document type
import settings from './singletons/settings'

const singletons = [settings]

export const schemaTypes = [
  ...singletons,
  tech,
  projects,
  professionalExperience,
  education,
  home
]
