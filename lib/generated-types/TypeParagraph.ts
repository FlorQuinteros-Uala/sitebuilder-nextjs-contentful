import type { EntryFieldTypes } from 'contentful';

export type Props = {
  parrafoName: EntryFieldTypes.Symbol;
  parrafoTitle?: EntryFieldTypes.Symbol;
  parrafoColumn: EntryFieldTypes.Boolean;
  parrafoDescription1: EntryFieldTypes.Symbol;
  parrafoDescription2?: EntryFieldTypes.Symbol;
  parrafoBackground?: EntryFieldTypes.Symbol;
  parrafoColor?: EntryFieldTypes.Symbol;
  componentName: EntryFieldTypes.Symbol<'Paragraph'>;
};
