import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeContainerListasFields {
  listName: EntryFieldTypes.Symbol;
  componentType: EntryFieldTypes.Symbol<'Lista no ordenada' | 'Lista ordenada'>;
  listTitle?: EntryFieldTypes.Symbol;
  listDescription?: [];
  componentName: EntryFieldTypes.Symbol<'ListContainer'>;
}

export type TypeContainerListasSkeleton = EntrySkeletonType<
  TypeContainerListasFields,
  'containerListas'
>;
export type TypeContainerListas<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeContainerListasSkeleton, Modifiers, Locales>;
