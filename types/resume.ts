export type ResumeType = {
  name: string
  email: string
  location: string
  resumeURL: string
  professionalExperience: ProfessionalExperienceType[]
  projects: TechnicalProjectType[]
  education: EducationType[]
}

export type ProfessionalExperienceType = {
  company: string
  companyURL: string
  position: string
  startDate: string
  endDate: string
  accomplishments: string[]
}

export type TechnicalProjectType = {
  projectName: string
  role: string
  liveSiteURL: string
  gitHubURL: string
  tags: { name: string }[]
  projectDetails: string[]
}

export type EducationType = {
  school: string
  schoolURL: string
  degree: string
  dateEarned: string
  displayDate: string
  details: string[]
}
