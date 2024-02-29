import { ProductCard } from '@uala-labssupport/ui';

import type { ContentfulStruct, TypeCardsFields } from '@/lib/types';

export const Product = (props: TypeCardsFields): JSX.Element => {
  return (
    <ProductCard
      cta={{
        title: props.cardCta ?? '',
        url: props.cardLink ?? '',
        external: props.cardTarget ?? false
      }}
      title={props.cardTitle}
      img={{
        url:
          (props.cardIcon as unknown as ContentfulStruct).fields.file.url ?? '',
        alt:
          (props.cardIcon as unknown as ContentfulStruct).fields.description ??
          ''
      }}
      full={
        props.componentName.toString() === 'Producto Full Image' ? true : false
      }
    />
  );
};
