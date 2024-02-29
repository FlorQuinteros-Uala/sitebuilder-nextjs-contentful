import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeCardsFields {
  nombreDelComponente?: EntryFieldTypes.Symbol;
  componentName: EntryFieldTypes.Symbol<
    | 'Horizontal Estática'
    | 'Horizontal Link'
    | 'Producto Default'
    | 'Producto Full Image'
    | 'Vertical Estática Default'
    | 'Vertical Estática Disclaimer'
    | 'Vertical Estática Feature'
    | 'Vertical Link'
  >;
  cardTitle: EntryFieldTypes.Symbol;
  cardDescription?: EntryFieldTypes.Text;
  cardIcon?: EntryFieldTypes.AssetLink;
  cardImage?: EntryFieldTypes.AssetLink;
  cardLinkAvailable?: EntryFieldTypes.Boolean;
  cardCta?: EntryFieldTypes.Symbol;
  cardTarget?: EntryFieldTypes.Boolean;
  cardLink?: EntryFieldTypes.Symbol;
  cardDisclaimer?: EntryFieldTypes.Symbol;
}

export type TypeCardsSkeleton = EntrySkeletonType<TypeCardsFields, 'cards'>;
export type TypeCards<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCardsSkeleton, Modifiers, Locales>;
