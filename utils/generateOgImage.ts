import { getCldOgImageUrl } from 'next-cloudinary'

interface GenerateOgImageUrlProps {
  header: string
  description: string
}

const generateOgImageUrl = ({
  header,
  description,
}: GenerateOgImageUrlProps): string => {
  return getCldOgImageUrl({
    src: '/portfolio/vksq41gpozn34ishv1yx',
    width: 1200,
    height: 630,
    overlays: [
      {
        position: {
          x: 50,
          y: 50,
          gravity: 'north_west',
        },
        text: {
          color: 'white',
          fontFamily: 'Arial',
          fontSize: 175,
          fontWeight: 'bold',
          text: header,
        },
      },
      {
        width: '800',
        crop: 'fit',
        position: {
          x: 50,
          y: 250,
          gravity: 'north_west',
        },
        text: {
          color: 'white',
          fontFamily: 'Arial',
          fontSize: 75,
          letterSpacing: -0.05,
          text: description,
        },
      },
    ],
  })
}

export default generateOgImageUrl
