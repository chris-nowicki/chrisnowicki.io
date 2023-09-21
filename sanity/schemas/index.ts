import home from './pages/home'
import now from './pages/now'
import tech from './skills'
import projects from './projects'

// Singleton document type
import settings from './singletons/settings'
const singletons = [settings]

export const schemaTypes = [...singletons, home, now, tech, projects]
