export interface BlockTitleDescriptionImageFields {
    fields: {
        heading?: string;
        images?: string | string[];
        description?: string;
        label?: string;
        href?: string;
    }
    contentTypeId: string
}