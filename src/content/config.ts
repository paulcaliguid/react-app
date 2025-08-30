export type Provider = 'local' | 'sanity'

export function getProvider(): Provider {
  const pid = import.meta.env.VITE_SANITY_PROJECT_ID
  const dataset = import.meta.env.VITE_SANITY_DATASET
  return pid && dataset ? 'sanity' : 'local'
}

export const SANITY = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-08-01',
  useCdn: true,
}
