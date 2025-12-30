import styles from './hero.module.scss'
import { TextContentInterface } from '../../../entities/TextContentInterface'

import Image from 'next/image'
import { getEntriesByTitle, getAssetById } from '../../../../lib/contentful/contentful'

export default async function Hero() {
    const photo = await getAssetById('7kFoQhR5Z73TamQJYj9Lxx');
    const heroPhoto = `https:${photo.file.url}`
    const alternativeText = photo.description || 'Image de um grupo de ciclistas mulheres sorrindo para a camera com o texto "Qualquer mina, qualquer bike"'

    const texts = await getEntriesByTitle({
        "content_type": 'blockTitleDescriptionImage',
        "fields.title": 'Hero'
    })
    
    const description = texts.description.content[0].content.map((textContent: TextContentInterface) => {
        return textContent.content[0].content[0].value
    })

    return (
        <div className={styles['hero']}>
            <div className={styles['hero__content']}>
                <h1 className={styles['hero__title']}>{texts.heading}</h1>
                <div className={styles['hero__description-wrapper']}>
                    <ul className={styles['hero__description-slider']}>
                        { description.map((text: string, index: number) => (
                            <li className={styles['hero__description-item']}>
                                {index === 0 ? <b>{text}</b> : text}
                            </li>
                        ))}
                        { description.map((text: string, index: number) => (
                            <li className={styles['hero__description-item']}
                                aria-hidden="true">
                                {index === 0 ? <b>{text}</b> : text}
                            </li>
                        ))}
                        { description.map((text: string, index: number) => (
                            <li className={styles['hero__description-item']}
                                aria-hidden="true">
                                {index === 0 ? <b>{text}</b> : text}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    className={styles['hero__image']}
                    src={heroPhoto}
                    alt={alternativeText}
                    width={1120}
                    height={575.7}
                />
            </div>
        </div>
    );
}
