import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';
import type { TypeSitioWebSkeleton } from './TypeSitioWeb';

export interface TypeLandingFields {
  landingName: EntryFieldTypes.Symbol;
  landingWeb: EntryFieldTypes.EntryLink<TypeSitioWebSkeleton>;
  landingUrl: EntryFieldTypes.Symbol;
  seoTitle?: EntryFieldTypes.Symbol;
  seoMeta?: EntryFieldTypes.Text;
  searchEngine: EntryFieldTypes.Boolean;
  excludeLinksRankings: EntryFieldTypes.Boolean;
  canonical?: EntryFieldTypes.Symbol;
  landingContent?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeLandingSkeleton = EntrySkeletonType<
  TypeLandingFields,
  'landing'
>;
export type TypeLanding<Modifiers extends ChainModifiers> = Entry<
  TypeLandingSkeleton,
  Modifiers
>;
