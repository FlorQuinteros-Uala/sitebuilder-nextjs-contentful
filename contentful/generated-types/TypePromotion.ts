import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

import type { TypeSitioWebSkeleton } from './TypeSitioWeb';

export interface TypePromotionLocationFields {
  Location: EntryFieldTypes.Symbol;
  sitioWeb: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypePromotionLocationSkeleton = EntrySkeletonType<
  TypePromotionLocationFields,
  'promotionLocation'
>;
export type TypePromotionLocation<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePromotionLocationSkeleton, Modifiers, Locales>;

export interface TypePromotionSpecsFields {
  titularDescuento: EntryFieldTypes.Symbol;
  previewDescripcion?: EntryFieldTypes.Symbol;
  PromotionDescription?: EntryFieldTypes.Text;
  isCta: EntryFieldTypes.Boolean;
  ButtonText?: EntryFieldTypes.Symbol;
  ButtonHref?: EntryFieldTypes.Symbol;
  Cardexpand?: EntryFieldTypes.Symbol<
    'Ver descuento' | 'Ver los detalles de la promo' | 'Ver más'
  >;
  promotionPayment?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      'QR' | 'Tarjeta Prepaga' | 'Tarjeta de Crédito' | 'Tarjeta de Débito'
    >
  >;
  PromotionDays?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'Domingo'
      | 'Jueves'
      | 'Lunes'
      | 'Martes'
      | 'Miércoles'
      | 'Sábado'
      | 'Todos los días'
      | 'Viernes'
    >
  >;
  PromotionPlace?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<'Físico' | 'Online'>
  >;
  PromotionDate?: EntryFieldTypes.Symbol;
  PromotionCashback?: EntryFieldTypes.Symbol;
  PromotionCashDate?: EntryFieldTypes.Symbol;
  PromotionDisponibilidad?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePromotionLocationSkeleton>
  >;
  promotionLegal?: EntryFieldTypes.Text;
}

export type TypePromotionSpecsSkeleton = EntrySkeletonType<
  TypePromotionSpecsFields,
  'promotionSpecs'
>;
export type TypePromotionSpecs<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePromotionSpecsSkeleton, Modifiers, Locales>;

export interface TypePromotionCategoryFields {
  Category: EntryFieldTypes.Symbol;
}

export type TypePromotionCategorySkeleton = EntrySkeletonType<
  TypePromotionCategoryFields,
  'promotionCategory'
>;
export type TypePromotionCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePromotionCategorySkeleton, Modifiers, Locales>;

export interface TypePromotionFields {
  promotionName: EntryFieldTypes.Symbol;
  promotionweb: EntryFieldTypes.EntryLink<TypeSitioWebSkeleton>;
  PromotionSeoTitle: EntryFieldTypes.Symbol;
  promotionSeoDescription: EntryFieldTypes.Symbol;
  urlDeLaPromocion?: EntryFieldTypes.Symbol;
  isFeaturedPromotion: EntryFieldTypes.Boolean;
  imagenesDestacada?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  isUalaMas?: EntryFieldTypes.Boolean;
  nivelUal?: EntryFieldTypes.Integer;
  cantidadDePuntos?: EntryFieldTypes.Integer;
  previewTitle?: EntryFieldTypes.Symbol;
  previewDescription: EntryFieldTypes.Symbol;
  promotionLogo: EntryFieldTypes.AssetLink;
  PromotionExtra: EntryFieldTypes.Boolean;
  PromotionCategory?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePromotionCategorySkeleton>
  >;
  PromotionSpecs: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePromotionSpecsSkeleton>
  >;
  componentName?: EntryFieldTypes.Symbol;
}

export type TypePromotionSkeleton = EntrySkeletonType<
  TypePromotionFields,
  'promotion'
>;
export type TypePromotion<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePromotionSkeleton, Modifiers, Locales>;
