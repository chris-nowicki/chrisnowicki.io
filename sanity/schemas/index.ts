import tech from './tech'
import projects from './projects'
import professionalExperience from './professionalExperience'
import education from './education'

// Singleton document type
import settings from './singletons/settings'
import resume from './singletons/resume'

const singletons = [settings, resume]

export const schemaTypes = [
  ...singletons,
  tech,
  projects,
  professionalExperience,
  education,
]
