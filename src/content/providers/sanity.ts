import type { SiteMeta, Navbar, Hero, About, Projects, Experience, Contact } from '../types'
import { SANITY } from '../config'

async function client() {
  // dynamic import to avoid build-time dependency when unused
  const mod: any = await import('@sanity/client')
  return mod.createClient({
    projectId: SANITY.projectId,
    dataset: SANITY.dataset,
    apiVersion: SANITY.apiVersion,
    useCdn: SANITY.useCdn,
  })
}

export const sanityProvider = {
  async getSite(): Promise<SiteMeta> {
    const c = await client()
    return await c.fetch("*[_type=='site'][0]{title, description}")
  },
  async getNavbar(): Promise<Navbar> {
    const c = await client()
    const items = await c.fetch("*[_type=='navItem']|order(order asc){label, path}")
    return { items }
  },
  async getHome(): Promise<Hero> {
    const c = await client()
    return await c.fetch("*[_type=='home'][0]{headline, subheadline, ctaLabel, ctaHref, 'image': image.asset->url}")
  },
  async getAbout(): Promise<About> {
    const c = await client()
    return await c.fetch("*[_type=='about'][0]{heading, body}")
  },
  async getProjects(): Promise<Projects> {
    const c = await client()
    const heading = await c.fetch("*[_type=='projects'][0].heading")
    const items = await c.fetch("*[_type=='project']{title, description, link}")
    return { heading, items }
  },
  async getExperience(): Promise<Experience> {
    const c = await client()
    const heading = await c.fetch("*[_type=='experience'][0].heading")
    const items = await c.fetch("*[_type=='experienceItem']|order(order asc){company, role, period, description}")
    return { heading, items }
  },
  async getContact(): Promise<Contact> {
    const c = await client()
    return await c.fetch("*[_type=='contact'][0]{heading, intro}")
  },
}
