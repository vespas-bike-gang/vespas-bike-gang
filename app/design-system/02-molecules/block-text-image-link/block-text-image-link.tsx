import { getAssetById, getEntryById } from '@/lib/contentful/contentful'
import { ImageInterface, ImageFormattedInterface } from '@/app/entities/ImageInterface'
import styles from './block-text-image-link.module.scss'

import Image from 'next/image'

export default async function BlockTextImageLink() {
    const blockData = await getEntryById('2D1j2eRKFCeG4l2H0S6D24')
    const photosLeft = [] as ImageFormattedInterface[]
    const photosRight = [] as ImageFormattedInterface[]
    blockData.images.forEach((image: ImageInterface, index: number) => {
        const photoData =  {
            url: `https:${image.fields.file.url}`,
            alt: image.fields.description,
            height: image.fields.file.details.image.height,            
            width: image.fields.file.details.image.width
        }

        if(index % 2 === 0){
            photosLeft.push(photoData)
            return
        }

        photosRight.push(photoData)
        return
    })

    return (
        <section className={styles['block-text-image-link']}>
            <div className={styles['block-text-image-link__text-container']}>
                <h2 className={styles['block-text-image-link__title']}>
                    {blockData.heading}
                </h2>
                <div>
                    {blockData.description.content[0].content[0].value}
                </div>
                <a 
                    href={blockData.href}
                    className={styles['block-text-image-link__link']}>
                    {blockData.label}
                </a>
            </div>
            <div className={styles['block-text-image-link__images-container']}>
                <div className={styles['block-text-image-link__images-column']}>
                    { photosLeft.map((photo: ImageFormattedInterface, index: number) => (
                        <Image
                            key={index}
                            className={styles['block-text-image-link__image']}
                            width={photo.width}
                            height={photo.height}
                            alt={photo.alt}
                            src={photo.url}/>
                    )) }
                </div>

                <div className={styles['block-text-image-link__images-column']}>
                    { photosRight.map((photo: ImageFormattedInterface, index: number) => (
                        <Image
                            key={index}
                            className={styles['block-text-image-link__image']}
                            width={photo.width}
                            height={photo.height}
                            alt={photo.alt}
                            src={photo.url}/>
                    )) }
                </div>
            </div>
        </section>
    )
}