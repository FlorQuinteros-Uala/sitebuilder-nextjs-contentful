import { HeroPromotion } from './HeroPromotion';
import { PromotionDetail } from './PromotionDetail';
import { WeekDaysSelected } from './WeekDaysSelected';

export const OnePromotionSelected = ({ promotion, logo }) => {
  const { title, description, cta } = promotion;

  return (
    <>
      <div>
        <HeroPromotion
          content={{
            fields: Object.assign({}, { title, description, cta }),
            logo: logo
          }}
        />
      </div>
      <section>
        <h3 className="subtitle-3 mb-10">Detalles</h3>
        <div className="grid md:grid-cols-[325px_minmax(100px,_1fr)_1fr] gap-12 xl:gap-20">
          {promotion.days && (
            // promotionDays
            <PromotionDetail title={'Días:'} iconName={'calendar'}>
              <WeekDaysSelected selectedDays={promotion.days} />
            </PromotionDetail>
          )}
          {promotion.paymentMethods && (
            //promotionPayment
            <PromotionDetail
              title={'Métodos de pago:'}
              paragraph={promotion.paymentMethods}
              iconName={'wallet'}
            />
          )}
          {promotion.place && (
            //promotionPlace
            <PromotionDetail
              title={'Tipo de comercio:'}
              paragraph={promotion.place}
              iconName={'stores'}
            />
          )}
          {promotion.date && (
            // promotionDate
            <PromotionDetail
              title={'Válido hasta:'}
              paragraph={[promotion.date]}
              iconName={'time'}
            />
          )}
          {promotion.cashback && (
            // promotionCashback
            <PromotionDetail
              title={'Tope de reintegro:'}
              paragraph={[promotion.cashback]}
              iconName={'fci'}
            />
          )}
          {promotion.cashdate && (
            // promotionCashDate
            <PromotionDetail
              title={'Tiempo de acreditación:'}
              paragraph={[promotion.cashdate]}
              iconName={'clock'}
            />
          )}
          {promotion.availability && (
            // promotionCashDate
            <PromotionDetail
              title={'Disponible en:'}
              paragraph={promotion.availability}
              iconName={'clock'}
            />
          )}
        </div>
      </section>
      <section className="w-full mt-20 mb-2">
        <h4 className="subtitle-4 my-4">Términos y condiciones</h4>
        <p className="text-gray-150 text-justify break-words">
          <small className="text-sm leading-[20px]">
            {promotion.legalDisclaimer}
          </small>
        </p>
      </section>
    </>
  );
};
