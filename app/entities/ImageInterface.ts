export interface ImageInterface {
    metadata: object;
    sys: object;
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: {
                size: number;
                image: {
                    width: number;
                    height: number;
                }
            },
            fileName: string;
            contentType: string;
        }
    }
}

export interface ImageFormattedInterface {
    url: string;
    alt: string;
    height: number;
    width: number;
}