import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeSitioWebFields {
  webName: EntryFieldTypes.Symbol;
  robotsTxt?: EntryFieldTypes.AssetLink;
  sitemap?: EntryFieldTypes.AssetLink;
}

export type TypeSitioWebSkeleton = EntrySkeletonType<
  TypeSitioWebFields,
  'sitioWeb'
>;
export type TypeSitioWeb<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeSitioWebSkeleton, Modifiers, Locales>;
