import { createClient, EntryCollection } from 'contentful';

type GetEntriesByTitleParams = {
    contentType: string;
    title: string;
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
})

export async function getEntriesByTitle({contentType, title}: GetEntriesByTitleParams): Promise<any> {
    try {
        const entries = await client.getEntries({
            content_type: contentType,
            'fields.title': title,
        });

        return entries.items[0]?.fields || []
    } catch (error) {
        console.error('Error fetching navigation menu:', error);
        //TODO: Adicionar tratamento de erro pelo redux
    }
}