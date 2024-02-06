import { useBreakpoint } from '@uala/abra-utils';
import Image from 'next/image';

import { CardPromotionsDetail } from './CardPromotionsDetail';

export const TwoPromotionSelected = ({ promotions, logo }) => {
  const isDesktop = useBreakpoint('lg');

  return (
    <>
      <div className="my-10">
        <Image
          width={204}
          height={88}
          alt={logo.alt}
          style={{
            display: 'flex',
            border: 'solid',
            borderWidth: '1px',
            borderRadius: '11px',
            borderColor: '#C4C4C4',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '$5'
          }}
          objectFit="cover"
          src={`https:${logo.src}`}
        />
      </div>
      <section className={`${isDesktop ? 'flex gap-5' : 'grid gap-6'}`}>
        {promotions.map((p) => {
          return <CardPromotionsDetail key={p.id} data={p} />;
        })}
      </section>
    </>
  );
};
