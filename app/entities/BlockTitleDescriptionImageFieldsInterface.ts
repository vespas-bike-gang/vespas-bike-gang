import { ImageInterface } from "./ImageInterface"
export interface BlockTitleDescriptionImageFieldsInterface {
    fields: {
        heading?: string;
        images?: ImageInterface;
        description?: string;
        label?: string;
        href?: string;
    }
    contentTypeId: string
}