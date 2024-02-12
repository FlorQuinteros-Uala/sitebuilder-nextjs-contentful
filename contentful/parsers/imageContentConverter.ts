import type { ContentfulStruct } from '@/types/TypeTemp';

export const imageContentConverter = (imageContent: ContentfulStruct) => {
  return {
    src: imageContent.fields.file.url ?? '',
    alt: imageContent.fields.description ?? ''
  };
};
