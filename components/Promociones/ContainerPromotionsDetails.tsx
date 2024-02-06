import { Button } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';

import { PromotionDetail } from './PromotionDetail';
import { WeekDaysSelected } from './WeekDaysSelected';

export const ContainerPromotionsDetails = ({ data }) => {
  const isDesktop = useBreakpoint('lg');

  return (
    <>
      <div>
        <p className="mb-7 text-gray-150 text-base">{data.description}</p>
      </div>
      <Button as="a" variant="primary" size="md" isBlock={!isDesktop}>
        {data.cta.text}
      </Button>
      <h3 className="mt-10 subtitle-3 mb-8">Detalles</h3>
      <div className="grid gap-5 xl:gap-10">
        {data.days && (
          // promotionDays
          <PromotionDetail title={'Días:'} iconName={'calendar'}>
            <WeekDaysSelected selectedDays={data.days} />
          </PromotionDetail>
        )}
        {data.paymentMethods && (
          //promotionPayment
          <PromotionDetail
            title={'Métodos de pago:'}
            paragraph={data.paymentMethods}
            iconName={'wallet'}
          />
        )}
        {data.place && (
          //promotionPlace
          <PromotionDetail
            title={'Tipo de comercio:'}
            paragraph={data.place}
            iconName={'stores'}
          />
        )}
        {data.date && (
          // promotionDate
          <PromotionDetail
            title={'Válido hasta:'}
            paragraph={[data.date]}
            iconName={'time'}
          />
        )}
        {data.cashback && (
          // promotionCashback
          <PromotionDetail
            title={'Tope de reintegro:'}
            paragraph={[data.cashback]}
            iconName={'fci'}
          />
        )}
        {data.cashdate && (
          // promotionCashDate
          <PromotionDetail
            title={'Tiempo de acreditación:'}
            paragraph={[data.cashdate]}
            iconName={'clock'}
          />
        )}
        {data.availability && (
          // promotionCashDate
          <PromotionDetail
            title={'Disponible en:'}
            paragraph={data.availability}
            iconName={'clock'}
          />
        )}
      </div>
      <div className="w-full mt-20 mb-2">
        <h4 className="subtitle-4 my-4">Términos y condiciones</h4>
        <p className="text-gray-150 text-justify break-words">
          <small className="text-sm leading-[20px]">
            {data.legalDisclaimer}
          </small>
        </p>
      </div>
    </>
  );
};
