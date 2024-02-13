import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

import type { TypeSitioWebSkeleton } from './TypeSitioWeb';

export interface TypeLegalesYDocumentosFields {
  sitioWeb?: EntryFieldTypes.EntryLink<TypeSitioWebSkeleton>;
  documentName?: EntryFieldTypes.Symbol;
  documentUrl?: EntryFieldTypes.Symbol;
  documentLogo?: EntryFieldTypes.AssetLink;
  DocumentTitle?: EntryFieldTypes.Symbol;
  documentDescription?: EntryFieldTypes.Symbol;
  documentFile?: EntryFieldTypes.AssetLink;
  documentContent?: EntryFieldTypes.Text;
  documentContentExtra?: EntryFieldTypes.Text;
}

export type TypeLegalesYDocumentosSkeleton = EntrySkeletonType<
  TypeLegalesYDocumentosFields,
  'legalesYDocumentos'
>;
export type TypeLegalesYDocumentos<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLegalesYDocumentosSkeleton, Modifiers, Locales>;
