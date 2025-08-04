// src/sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ymgnhcw9', // Find this in your Sanity project dashboard
  dataset: 'production', // Use 'production' unless you chose a different name
  apiVersion: '2022-03-25', // Use a recent date
  token: 'sklBEJAeifXWe8MRUEtgV72UgXPAtXfKCp1wELAgdqm5gHNvZzObeZUgud388DAkK7msRJgncxtM6xNRLczvyYDLpXNc2n6YD1ymFoSjwXBUOOrTE6liAxA0ZfaeGvOz0kpuuNaj0hGXjasL1nVweLcMzoNzUKrBFeqks8csSO7byirQMqBr', // The token you created with "Creator" permissions
  useCdn: false, // Set to false to ensure you're always getting the latest data
});