import intro from './pages/intro'
import featuredProjects from './pages/featuredProjects'
import resume from './pages/resume'
import tech from './skills'
import projects from './projects'

// Singleton document type
import seo from './singletons/seo'
const singletons = [seo]

export const schemaTypes = [
  ...singletons,
  intro,
  featuredProjects,
  resume,
  tech,
  projects,
]
