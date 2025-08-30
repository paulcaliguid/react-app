import site from '../local/site.json'
import navbar from '../local/navbar.json'
import home from '../local/home.json'
import about from '../local/about.json'
import projects from '../local/projects.json'
import experience from '../local/experience.json'
import contact from '../local/contact.json'

export const localProvider = {
  getSite: async () => site,
  getNavbar: async () => navbar,
  getHome: async () => home,
  getAbout: async () => about,
  getProjects: async () => projects,
  getExperience: async () => experience,
  getContact: async () => contact,
}
