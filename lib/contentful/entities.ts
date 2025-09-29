import { EntrySkeletonType } from 'contentful'

export interface GetEntries extends EntrySkeletonType {
    contentType: string,
    title: string
}