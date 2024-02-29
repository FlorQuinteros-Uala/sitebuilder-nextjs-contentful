import { Container } from '@uala/abra';
import { Accordion as AccordionComponent } from '@uala-labssupport/ui';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import type { TypeContainerDesplegableFields } from '@/lib/types';
import type { Icon, Params } from '@/types';

export const Accordion = ({
  containerTitle,
  containerDescription,
  containerIcon
}: TypeContainerDesplegableFields) => {
  const { fields }: Icon = containerIcon;

  const props: Params = {
    title: String(containerTitle),
    icon: (
      <Image
        src={`https:${fields.file.url}`}
        alt={fields.description}
        width={fields.file.details.image.width}
        height={fields.file.details.image.height}
      />
    ),
    variant: 'uala'
  };
  return (
    <Container layout="100">
      <AccordionComponent {...props}>
        <ReactMarkdown className="reactMarkdown mt-5">
          {containerDescription ? `${containerDescription}` : null}
        </ReactMarkdown>
      </AccordionComponent>
    </Container>
  );
};
