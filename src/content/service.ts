import { getProvider } from './config'
import { localProvider } from './providers/local'

export async function getSite() { return await select().getSite() }
export async function getNavbar() { return await select().getNavbar() }
export async function getHome() { return await select().getHome() }
export async function getAbout() { return await select().getAbout() }
export async function getProjects() { return await select().getProjects() }
export async function getExperience() { return await select().getExperience() }
export async function getContact() { return await select().getContact() }

function select() {
  if (getProvider() === 'sanity') {
    // Lazy require to avoid bundling when not configured
    return requireSanity()
  }
  return localProvider
}

function requireSanity() {
  // proxy object whose methods dynamically import the provider
  return {
    async getSite() { return (await import('./providers/sanity')).sanityProvider.getSite() },
    async getNavbar() { return (await import('./providers/sanity')).sanityProvider.getNavbar() },
    async getHome() { return (await import('./providers/sanity')).sanityProvider.getHome() },
    async getAbout() { return (await import('./providers/sanity')).sanityProvider.getAbout() },
    async getProjects() { return (await import('./providers/sanity')).sanityProvider.getProjects() },
    async getExperience() { return (await import('./providers/sanity')).sanityProvider.getExperience() },
    async getContact() { return (await import('./providers/sanity')).sanityProvider.getContact() },
  }
}
