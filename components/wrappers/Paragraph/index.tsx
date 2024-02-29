import { Container } from '@uala/abra';
import { Paragraph as ParagraphComponent } from '@uala-labssupport/ui';

import type { Props } from '@/contentful/generated-types/TypeParagraph';

export const Paragraph = ({
  parrafoTitle,
  parrafoColumn,
  parrafoDescription1,
  parrafoDescription2,
  parrafoBackground,
  parrafoColor
}: Props) => {
  const columns = parrafoColumn ? false : true;
  const colorParrafo = parrafoColor ? parrafoColor.toString() : '#3A3A3A';
  const background = parrafoBackground ? parrafoBackground?.toString() : '#FFF';
  const Component = (
    <ParagraphComponent
      title={parrafoTitle}
      titleType="h2"
      firstParagraph={parrafoDescription1}
      secondParagraph={parrafoDescription2}
      backgroundColor={parrafoBackground}
      hasColumns={columns}
      textColor={colorParrafo}
      css={{
        color: colorParrafo,
        'background-color': background,
        '& div': {
          color: colorParrafo
        }
      }}
    />
  );

  return (
    <div className={`bg-[${background}]`}>
      <Container layout="100">{Component}</Container>
    </div>
  );
};
