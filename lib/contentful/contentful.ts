import { createClient, EntriesQueries } from 'contentful';
import * as Entities from './entities'

const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID
})

/**
 * Gets all entries from a specific type
 * The types are created on Contenful
 * and can be founded in "info"
 * @param requestBody: GetEntries
 * @returns entries: Promise <Error | Object>
 */

export async function getEntriesByTitle(requestBody: EntriesQueries<Entities.GetEntries, 'WITH_ALL_LOCALES'>): Promise<any> {
    try {
        const entries = await client.getEntries({...requestBody});
        return entries.items[0]?.fields
    } catch (error) {
        console.error('Error fetching navigation menu:', error);
        //TODO: Adicionar tratamento de erro pelo redux
    }
}

/**
 * Gets photos from asset ID
 * @param requestPhoto: string
 * @returns assets: Promise <Error | Object>
 */

export async function getSpecifImage(requestPhoto: string): Promise<any> {
    try {
        const assets = await client.getAsset(requestPhoto)
        return assets.fields
    } catch (error) {
        console.error('Error fetching assets', error);
        //TODO: Adicionar tratamento de erro pelo redux
    }
}