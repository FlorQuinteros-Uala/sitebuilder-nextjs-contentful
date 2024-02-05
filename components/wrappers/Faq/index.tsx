import { Container } from '@uala/abra';
import { Faq as FaqComponent } from '@uala-labssupport/ui';

export const Faq = ({ titleDelConentedor, faqContent }) => {
  const props = {
    data: [
      {
        faqs: faqContent.map(({ fields }) => {
          return {
            content: fields.faqRespuesta,
            title: fields.faqPregunta
          };
        }),
        titleGroup: ''
      }
    ]
  };

  return (
    <Container layout="100">
      <FaqComponent
        brand="uala"
        boxShadow="0px 5px 24px 0px rgba(117, 117, 117, 0.15)"
        title={titleDelConentedor}
        {...props}
      />
    </Container>
  );
};
