import home from './pages/home'
import tech from './skills'
import projects from './projects'

// Singleton document type
import settings from './singletons/settings'
const singletons = [settings]

export const schemaTypes = [...singletons, home, tech, projects]
