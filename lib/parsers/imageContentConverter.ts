import type { ContentfulStruct } from '../generated-types';

export const imageContentConverter = (imageContent: ContentfulStruct) => {
  return {
    src: imageContent.fields.file.url ?? '',
    alt: imageContent.fields.description ?? ''
  };
};
