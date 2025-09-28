import styles from './hero.module.scss'

import Image from 'next/image'
import { getEntriesByTitle, getSpecifImage } from '../../../../lib/contentful/contentful'

export default async function Hero() {
    const photo = await getSpecifImage('7kFoQhR5Z73TamQJYj9Lxx');
    const heroPhoto = `https:${photo.file.url}`
    const alternativeText = photo.description || 'Image de um grupo de ciclistas mulheres sorrindo para a camera com o texto "Qualquer mina, qualquer bike"'

    const texts = await getEntriesByTitle({
        "content_type": 'blockTitleDescriptionImage',
        "fields.title": 'Hero'
    })
    const descriptionWithSymbols = {
        emphasis: texts.description.content[0].content[0].value,
    }

    return (
        <div className={styles['hero']}>
            <div className={styles['hero__content']}>
                <h1 className={styles['hero__title']}>{texts.heading}</h1>
                <div className={styles['hero__description-wrapper']}>
                    <p className={styles['hero__description']}>
                        <span className={styles['hero__description-block']}>
                            <b className={styles['hero__description-emphasis']}>
                                {descriptionWithSymbols.emphasis}&#9679;
                            </b>
                            {texts.description.content[0].content[1].value}
                        </span>
                        <span className={styles['hero__description-block']}>
                            <b className={styles['hero__description-emphasis']}>
                                {texts.description.content[0].content[0].value}
                            </b>
                            {texts.description.content[0].content[1].value}
                        </span>
                    </p>
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
