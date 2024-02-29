import { VerticalCard } from '@uala-labssupport/ui';

import type { TypeCardsFields } from '@/contentful/generated-types/TypeCards';
import type { ContentfulStruct } from '@/contentful/generated-types/TypeTemp';

export const Vertical = (props: TypeCardsFields): JSX.Element => {
  const type = props.componentName.toString().split(' ').pop().toLowerCase();

  return (
    <VerticalCard
      content={{
        title: props.cardTitle,
        paragraph: props.cardDescription
      }}
      img={{
        url: (props.cardIcon as unknown as ContentfulStruct)?.fields?.file?.url,
        alt: (props.cardIcon as unknown as ContentfulStruct)?.fields
          ?.description
      }}
      cardType={type}
      isStatic={type.includes('default') ? true : false}
      disclaimer={props.cardDisclaimer ?? null}
      feature={
        props.cardImage
          ? {
              url: (props.cardImage as unknown as ContentfulStruct).fields.file
                .url,
              alt: (props.cardImage as unknown as ContentfulStruct).fields
                .description
            }
          : null
      }
      cta={
        props.cardLinkAvailable
          ? {
              title: props.cardCta,
              url: props.cardLink,
              external: props.cardTarget
            }
          : null
      }
    />
  );
};
