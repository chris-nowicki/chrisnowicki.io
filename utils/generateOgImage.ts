import { getCldOgImageUrl } from 'next-cloudinary'

interface GenerateOgImageUrlProps {
  title: string
  description: string
}

const generateOgImageUrl = ({
  title,
  description,
}: GenerateOgImageUrlProps): string => {
  return getCldOgImageUrl({
    src: '/portfolio/vksq41gpozn34ishv1yx',
    width: 1200,
    height: 630,
    overlays: [
      {
        position: {
          x: 91,
          y: 80,
          gravity: 'north_west',
        },
        text: {
          color: 'white',
          fontFamily: 'Arial',
          fontSize: 175,
          fontWeight: 'bold',
          text: '/Blog',
        },
      },
      {
        width: 1900,
        crop: 'fit',
        position: {
          x: 91,
          y: 280,
          gravity: 'north_west',
        },
        text: {
          color: 'white',
          fontFamily: 'Arial',
          fontSize: 110,
          letterSpacing: -0.05,
          text: description,
        },
      },
    ],
  })
}

export default generateOgImageUrl
