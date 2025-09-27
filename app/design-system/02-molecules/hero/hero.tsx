import Image from 'next/image'
import { getSpecifImage } from '../../../../lib/contentful'

export default async function Hero() {
  const photo = await getSpecifImage();
  const heroPhoto = `https:${photo.fields.file.url}`

  if (!photo) return <h1>Post não encontrado</h1>;
  return (
    <div>
      <Image
        src={heroPhoto}
        alt={photo.fields.file.description}
        width={500}
        height={500}
      />
    </div>
  );
}
