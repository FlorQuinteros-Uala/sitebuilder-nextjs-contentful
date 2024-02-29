import { Card } from '@uala-labssupport/ui';

import type { TypeCardsFields } from '@/contentful/generated-types/TypeCards';
import type { ContentfulStruct } from '@/contentful/generated-types/TypeTemp';

export const Horizontal = (props: TypeCardsFields): JSX.Element => {
  return (
    <Card
      hasBtn={props.cardLinkAvailable}
      cta={
        props.cardLinkAvailable
          ? {
              title: props.cardCta,
              url: props.cardLink,
              external: props.cardTarget
            }
          : null
      }
      title={props.cardTitle}
      description={props.cardDescription}
      cardType="horizontal"
      icon={
        props.cardIcon
          ? {
              url: (props.cardIcon as unknown as ContentfulStruct).fields.file
                .url,
              alt: (props.cardIcon as unknown as ContentfulStruct).fields
                .description
            }
          : null
      }
    />
  );
};
