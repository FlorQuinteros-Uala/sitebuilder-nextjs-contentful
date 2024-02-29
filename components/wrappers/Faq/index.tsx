import { Container } from '@uala/abra';
import { Faq as FaqComponent } from '@uala-labssupport/ui';

enum FaqType {
  General = 'Generales',
  Producto = 'Específicas de producto'
}

export const Faq = ({ titleDelConentedor, faqContent, faqType }) => {
  const mapFieldsToFaqs = ({ fields }) => ({
    content: fields.faqRespuesta,
    title: fields.faqPregunta
  });

  const data =
    faqType[0] === FaqType.General
      ? faqContent.map(({ fields }) => ({
          titleGroup: fields.nameOfCategory,
          faqs: fields.faqCategoryItems.map(mapFieldsToFaqs)
        }))
      : [
          {
            titleGroup: '',
            faqs: faqContent.map(mapFieldsToFaqs)
          }
        ];

  return (
    <Container layout="100">
      <FaqComponent
        brand="uala"
        boxShadow="0px 5px 24px 0px rgba(117, 117, 117, 0.15)"
        title={titleDelConentedor}
        data={data}
      />
    </Container>
  );
};
