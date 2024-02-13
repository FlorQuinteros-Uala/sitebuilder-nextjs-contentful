import type { Entry } from 'contentful';

import { client } from './client';
import type { TypeLegalesYDocumentosSkeleton } from './generated-types/TypeLegalesYDocumentos';

type LegalDocumentEntry = Entry<
  TypeLegalesYDocumentosSkeleton,
  undefined,
  string
>;

export type LegalDocument = {
  seo: {
    title: string;
    description: string;
  };
  type: 'markdown' | 'file';
  content: string | null;
  extraContent: string | null;
  file: string | null;
  logo: {
    src: string;
    alt: string;
  } | null;
};

const parseLegalDocument = (
  entry: LegalDocumentEntry
): LegalDocument | null => {
  if (!entry) return null;

  return {
    seo: {
      title: entry.fields.DocumentTitle ?? '',
      description: entry.fields.documentDescription ?? ''
    },
    type: entry.fields.documentContent ? 'markdown' : 'file',
    content: entry.fields.documentContent ?? null,
    extraContent: entry.fields.documentContentExtra ?? null,
    file: entry.fields.documentFile?.fields?.file?.url ?? null,
    logo: entry.fields.documentLogo
      ? {
          src: entry.fields.documentLogo?.fields?.file?.url || '',
          alt: entry.fields.documentLogo?.fields?.title || ''
        }
      : null
  };
};

/**
 * @param {string} slug - El ID del elemento que se debe buscar.
 * @returns {Promise<{pageComponents: any, pageMetad  ata: {metaDesc: string, name: string, title: string, url: string}}>}
 * pageComponentes serán todos los componentes de la landing ordenados tal cual fue definido en Compose y pageMetadata será un objeto con los meta datos.
 */
export async function fetchLegalDocument(
  slug: string
): Promise<LegalDocument | null> {
  try {
    const { items } = await client.getEntries<TypeLegalesYDocumentosSkeleton>({
      content_type: 'legalesYDocumentos',
      'fields.documentUrl': slug,
      include: 5,
      limit: 1
    });

    const pdf = items[0];

    return parseLegalDocument(pdf);
  } catch (err) {
    console.error(err);
  }
}
