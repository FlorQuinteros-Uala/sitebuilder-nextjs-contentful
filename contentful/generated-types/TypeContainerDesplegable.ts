import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';
import type { Icon } from 'types/TypesAccordion';

export interface TypeContainerDesplegableFields {
  containerName: EntryFieldTypes.Symbol;
  componentName: EntryFieldTypes.Symbol;
  containerTitle?: EntryFieldTypes.Symbol;
  containerDescription?: EntryFieldTypes.Text;
  containerIcon?: Icon;
}

export type TypeContainerDesplegableSkeleton = EntrySkeletonType<
  TypeContainerDesplegableFields,
  'containerDesplegable'
>;
export type TypeContainerDesplegable<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeContainerDesplegableSkeleton, Modifiers, Locales>;
