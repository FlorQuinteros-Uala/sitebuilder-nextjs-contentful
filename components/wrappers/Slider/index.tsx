import { VerticalCard } from '@uala-labssupport/ui';

import MainSlider from './MainSlider';
import ModuloSlider from './ModuloSlider';

export const Slider = (props) => {
  if (props.sliderType !== 'MainSlider') {
    const {
      sliderTitle,
      colorDeTexto,
      colordeFondo,
      colordeFondoSecundario,
      esUnGradient,
      llevaColorDeFondo,
      sliderType
    } = props;

    const ModuloProps = {
      title: sliderTitle ?? '',
      description: '',
      cardsToShow: 3,
      css: {
        text: {
          color: colorDeTexto
        },
        wrapper: {
          background: !llevaColorDeFondo
            ? '#FFF'
            : esUnGradient
            ? `linear-gradient(180deg, ${colordeFondo} 25.32%, ${colordeFondoSecundario} 85.95%)`
            : colordeFondo,
          padding: '40px 0px 40px 25px',
          '@md': {
            padding: '60px 35px'
          }
        },
        innerContainer: {}
      },
      carouselSettings: {
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false
            }
          }
        ]
      }
    };

    return (
      <ModuloSlider {...ModuloProps}>
        {/* TO-DO: conectar las cards que correspondan cuando se resuelva el bloqueante de Contentful */}
        {Array.from({ length: 6 }, (_, index) => (
          <VerticalCard
            key={index}
            content={{
              title: 'Titular de card que puede tener hasta 2 líneas',
              paragraph: 'Titular de card que puede tener hasta 2 líneas'
            }}
            img={{
              url: 'https://placekitten.com/90/90',
              alt: 'Placeholder'
            }}
          />
        ))}
      </ModuloSlider>
    );
  }

  return <MainSlider sliderContent={props.sliderContent ?? []} />;
};
