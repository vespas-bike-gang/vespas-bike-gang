import { createClient, EntriesQueries, EntrySkeletonType } from 'contentful';

interface GetEntries extends EntrySkeletonType {
    contentType: string,
    title: string
}

const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID
})

export async function getEntriesByTitle(requestBody: EntriesQueries<GetEntries, 'WITH_ALL_LOCALES'>): Promise<any> {
    try {
        const entries = await client.getEntries({...requestBody});
        return entries
    } catch (error) {
        console.error('Error fetching navigation menu:', error);
        //TODO: Adicionar tratamento de erro pelo redux
    }
}