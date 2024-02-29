import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

import type { TypeSitioWebSkeleton } from './TypeSitioWeb';

export interface TypeNavbarItemFields {
  nombre: EntryFieldTypes.Symbol;
  enlace: EntryFieldTypes.Symbol;
  muestraPill?: EntryFieldTypes.Boolean;
  textoPill?: EntryFieldTypes.Symbol;
}

export type TypeNavbarItemSkeleton = EntrySkeletonType<
  TypeNavbarItemFields,
  'navbarItem'
>;
export type TypeNavbarItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeNavbarItemSkeleton, Modifiers, Locales>;

export interface TypeNavbarVerticalFields {
  nombreDeVertical: EntryFieldTypes.Symbol;
  renderizaElTitular?: EntryFieldTypes.Boolean;
  items?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeNavbarItemSkeleton>
  >;
}

export type TypeNavbarVerticalSkeleton = EntrySkeletonType<
  TypeNavbarVerticalFields,
  'navbarVertical'
>;
export type TypeNavbarVertical<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeNavbarVerticalSkeleton, Modifiers, Locales>;

export interface TypeNavbarCategoryFields {
  nombreDeCategora: EntryFieldTypes.Symbol;
  esUnDropdown?: EntryFieldTypes.Boolean;
  enlace?: EntryFieldTypes.Symbol;
  items?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeNavbarVerticalSkeleton>
  >;
}

export type TypeNavbarCategorySkeleton = EntrySkeletonType<
  TypeNavbarCategoryFields,
  'navbarCategory'
>;
export type TypeNavbarCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeNavbarCategorySkeleton, Modifiers, Locales>;

export interface TypeNavbarFields {
  navbarWeb: EntryFieldTypes.EntryLink<TypeSitioWebSkeleton>;
  componentName?: EntryFieldTypes.Symbol<'Navbar'>;
  title?: EntryFieldTypes.Symbol;
  logo?: EntryFieldTypes.AssetLink;
  enlaceLogo: EntryFieldTypes.Symbol;
  habilitarBotnEnElNavbar?: EntryFieldTypes.Boolean;
  textoDelBotn?: EntryFieldTypes.Symbol;
  enlaceDelBotn?: EntryFieldTypes.Symbol;
  navbarCategories?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeNavbarCategorySkeleton>
  >;
}

export type TypeNavbarSkeleton = EntrySkeletonType<TypeNavbarFields, 'navbar'>;
export type TypeNavbar<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeNavbarSkeleton, Modifiers, Locales>;
