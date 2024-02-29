import { MainSlider, ModuloSlider } from 'components/Sliders';

import { CardMap } from '../Cards/index';

enum Types {
  Main = 'MainSlider',
  Promotion = 'Cards promociones'
}

export const Slider = (props) => {
  if (props.sliderType !== Types.Main) {
    const {
      sliderTitle,
      colorDeTexto,
      colordeFondo,
      colordeFondoSecundario,
      esUnGradient,
      llevaColorDeFondo,
      sliderContent,
      sliderType,
      cantidadDeInstanciasVisibles
    } = props;

    const ModuloProps = {
      title: sliderTitle ?? '',
      description: '',
      cardsToShow: cantidadDeInstanciasVisibles ?? 3,
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
        {sliderContent &&
          sliderContent.map(({ fields, sys }) => {
            const CardComponent =
              sliderType === Types.Promotion
                ? CardMap['PromoCard']
                : CardMap[fields.componentName];
            return <CardComponent key={sys.id} {...fields} />;
          })}
      </ModuloSlider>
    );
  }

  return <MainSlider sliderContent={props.sliderContent ?? []} />;
};
