import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeModuloVideoFields {
  moduloName: EntryFieldTypes.Symbol;
  componentType: EntryFieldTypes.Symbol<
    'Animacion en columna' | 'Video Thumbnail'
  >;
  videoQuantity?: EntryFieldTypes.Boolean;
  moduloTitle?: EntryFieldTypes.Symbol;
  moduloDescription?: EntryFieldTypes.Symbol;
  enlaceDelThumbnail?: EntryFieldTypes.Symbol;
  moduloVideoDesktop: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  moduloVideoMobile?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  componentName: EntryFieldTypes.Symbol<'VideoSection'>;
}

export type TypeMduloVideoSkeleton = EntrySkeletonType<
  TypeModuloVideoFields,
  'mduloVideo'
>;
export type TypeMduloVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeMduloVideoSkeleton, Modifiers, Locales>;
