export type Resume = {
  name: string
  email: string
  location: string
  resumeURL: string
  professionalExperience: ProfessionalExperience[]
  projects: TechnicalProject[]
  education: Education[]
}

type ProfessionalExperience = {
  company: string
  companyURL: string
  position: string
  startDate: string
  endDate: string
  accomplishments: string[]
}

type TechnicalProject = {
  projectName: string
  role: string
  liveSiteURL: string
  gitHubURL: string
  tags: { name: string }[]
  projectDetails: string[]
}

type Education = {
  school: string
  schoolURL: string
  degree: string
  dateEarned: string
  displayDate: string
  details: string[]
}
