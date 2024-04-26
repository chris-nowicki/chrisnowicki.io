import { Client, Storage } from 'appwrite'
import { env } from '@/env'

const client = new Client()

const storage = new Storage(client)

client
  .setEndpoint(env.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(env.APPWRITE_PROJECT_ID) // Your project ID

export const getResume = async () => {
  const res = storage.getFileView('resume', 'resume')
  return res.href
}
