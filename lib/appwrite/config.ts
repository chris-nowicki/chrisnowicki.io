import * as sdk from 'node-appwrite'
import { env } from '../../env'

const endPoint = env.APPWRITE_ENDPOINT
const projectId = env.APPWRITE_PROJECT_ID
const apiKey = env.APPWRITE_API_KEY

const client = new sdk.Client()
  .setEndpoint(endPoint)
  .setProject(projectId)
  .setKey(apiKey)

export const db = new sdk.Databases(client)
