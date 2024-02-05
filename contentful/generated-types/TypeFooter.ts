import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';
import type { TypeSitioWebSkeleton } from './TypeSitioWeb';

export interface TypeFooterItemsFields {
  nombreDelItem?: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  esUnItemConImagen?: EntryFieldTypes.Boolean;
  imagenDelItem?: EntryFieldTypes.AssetLink;
  llevaTag?: EntryFieldTypes.Boolean;
  textoDelTag?: EntryFieldTypes.Symbol;
}

export type TypeFooterItemsSkeleton = EntrySkeletonType<
  TypeFooterItemsFields,
  'footerItems'
>;
export type TypeFooterItems<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeFooterItemsSkeleton, Modifiers, Locales>;

export interface TypeFooterVerticalFields {
  nombreDeVertical?: EntryFieldTypes.Symbol;
  nmeroDeColumna?: EntryFieldTypes.Integer<1 | 2 | 3 | 4>;
  poseeEnlacePropio?: EntryFieldTypes.Boolean;
  url?: EntryFieldTypes.Symbol;
  esUnaVerticalConImgenes?: EntryFieldTypes.Boolean;
  footerItems?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeFooterItemsSkeleton>
  >;
}

export type TypeFooterVerticalSkeleton = EntrySkeletonType<
  TypeFooterVerticalFields,
  'footerVertical'
>;
export type TypeFooterVertical<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeFooterVerticalSkeleton, Modifiers, Locales>;

export interface TypeFooterFields {
  componentName?: EntryFieldTypes.Symbol;
  nombreDeLaEntry?: EntryFieldTypes.Symbol;
  sitioWeb?: EntryFieldTypes.EntryLink<TypeSitioWebSkeleton>;
  logo?: EntryFieldTypes.AssetLink;
  claimMarca?: EntryFieldTypes.Text;
  footerVerticals?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeFooterVerticalSkeleton>
  >;
  footerDisclaimer: EntryFieldTypes.Text;
  footerLegalImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, 'footer'>;
export type TypeFooter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeFooterSkeleton, Modifiers, Locales>;
