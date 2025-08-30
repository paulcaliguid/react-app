import type { SiteMeta, Navbar, Hero, About, Projects, Experience, Contact } from '../types'
import { SANITY } from '../config'

const API_BASE = `https://${SANITY.projectId}.apicdn.sanity.io/${SANITY.apiVersion}/data/query/${SANITY.dataset}`

async function q<T=any>(groq: string, params?: Record<string, unknown>): Promise<T> {
  const url = new URL(API_BASE)
  url.searchParams.set('query', groq)
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(`$${k}`, JSON.stringify(v))
    }
  }
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`)
  const json = await res.json()
  return json.result as T
}

export const sanityProvider = {
  async getSite(): Promise<SiteMeta> {
    const r = await q<SiteMeta[]>("*[_type=='site'][0]{title, description}")
    return (r as any) || { title: '', description: '' }
  },
  async getNavbar(): Promise<Navbar> {
    const items = await q<any[]>("*[_type=='navItem']|order(order asc){label, path}")
    return { items: items || [] }
  },
  async getHome(): Promise<Hero> {
    const r = await q<Hero>("*[_type=='home'][0]{headline, subheadline, ctaLabel, ctaHref, 'image': image.asset->url}")
    return r as any
  },
  async getAbout(): Promise<About> {
    const r = await q<About>("*[_type=='about'][0]{heading, body}")
    return r as any
  },
  async getProjects(): Promise<Projects> {
    const heading = await q<string>("*[_type=='projects'][0].heading")
    const items = await q<any[]>("*[_type=='project']{title, description, link}")
    return { heading: (heading as any) || 'Projects', items: items || [] }
  },
  async getExperience(): Promise<Experience> {
    const heading = await q<string>("*[_type=='experience'][0].heading")
    const items = await q<any[]>("*[_type=='experienceItem']|order(order asc){company, role, period, description}")
    return { heading: (heading as any) || 'Experience', items: items || [] }
  },
  async getContact(): Promise<Contact> {
    const r = await q<Contact>("*[_type=='contact'][0]{heading, intro}")
    return r as any
  },
}
