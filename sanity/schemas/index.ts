import intro from './pages/intro'
import featuredProjects from './pages/featuredProjects'
import resume from './pages/resume'
import tech from './skills'
import projects from './projects'

// Singleton document type
import settings from './singletons/settings'
const singletons = [settings]

export const schemaTypes = [...singletons, intro, featuredProjects, resume, tech, projects]
