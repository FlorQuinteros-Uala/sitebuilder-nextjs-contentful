import { Paragraph } from '@uala-labssupport/ui';
import Image from 'next/image';

const RenderLegalDocument = ({
  type,
  seo,
  file,
  content,
  extraContent,
  logo
}) => {
  if (type === 'file') {
    return (
      <iframe
        title={seo.title ?? 'Ualá - Un banco pero fácil'}
        src={encodeURI(file)}
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
      />
    );
  }

  return (
    <main>
      <header className="my-8">
        <Image
          className="block m-auto"
          src={`https://${logo?.src}` || ''}
          alt={logo?.alt || ''}
          width={150}
          height={100}
        />
      </header>
      <section className="m-auto max-w-screen-xl">
        {/* {title && (
          <h2 className="font-bold text-blue-250 text-4xl mb-5">{title}</h2>
        )} */}
        {content && <Paragraph text={content} />}
        {extraContent && <Paragraph text={extraContent} />}
      </section>
    </main>
  );
};

export default RenderLegalDocument;
