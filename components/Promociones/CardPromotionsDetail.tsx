import { Button } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import { useState } from 'react';

import { ContainerPromotionsDetails } from './ContainerPromotionsDetails';

export const CardPromotionsDetail = ({ data }) => {
  const { title, expandCardText, ...rest } = data;

  const [isCollapsedCard, setIsCollapsedCard] = useState(true);
  const handleCollapseCards = () => {
    setIsCollapsedCard(true);
    window.scrollTo({
      behavior: 'smooth',
      top: 200
    });
  };
  const isDesktop = useBreakpoint('lg');
  return (
    <>
      <div className="max-w-[320px] md:max-w-[535px] box-border rounded-xl border-solid shadow-gray lg:px-9 px-5 py-9">
        <h2 className="font-bold mb-5 m-0 text-gray-250 text-[28px] lg:text-[40px] tracking-normal leading-[34px] lg:leading-[55px] order-2">
          {title}
        </h2>
        {isDesktop ? (
          <>
            <ContainerPromotionsDetails
              data={rest}
            ></ContainerPromotionsDetails>
          </>
        ) : (
          <>
            {isCollapsedCard ? (
              <Button
                css={{
                  textDecorationLine: 'underline'
                }}
                as="button"
                variant="text"
                size="md"
                isBlock={!isDesktop}
                onClick={() => setIsCollapsedCard(!isCollapsedCard)}
              >
                {expandCardText}
              </Button>
            ) : (
              <>
                <ContainerPromotionsDetails
                  data={data}
                ></ContainerPromotionsDetails>
                <div>
                  <Button
                    css={{
                      textDecorationLine: 'underline'
                    }}
                    as="button"
                    variant="text"
                    size="md"
                    isBlock={!isDesktop}
                    onClick={() => handleCollapseCards()}
                  >
                    Ocultar los detalles de la promo
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
