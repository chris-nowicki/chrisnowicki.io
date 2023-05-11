export type Resume = {
  name: string
  email: string
  location: string
  resumeURL: string
  professionalExperience: ProfessionalExperience[]
  projects: TechnicalProject[]
  education: Education[]
}

export type ProfessionalExperience = {
  company: string
  companyURL: string
  position: string
  startDate: string
  endDate: string
  accomplishments: string[]
}

export type TechnicalProject = {
  projectName: string
  role: string
  liveSiteURL: string
  gitHubURL: string
  tags: { name: string }[]
  projectDetails: string[]
}

export type Education = {
  school: string
  schoolURL: string
  degree: string
  dateEarned: string
  displayDate: string
  details: string[]
}
