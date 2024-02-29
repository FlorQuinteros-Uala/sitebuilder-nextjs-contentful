import { Container } from '@uala/abra';
import { ListContainer as ListContainerComponent } from '@uala-labssupport/ui';

import type { TypeContainerListasFields } from '@/contentful/generated-types/TypeContainerListas';

enum Type {
  Ordered = 'Lista ordenada',
  Unordered = 'Lista no ordenada'
}

export const ListContainer = (props) => {
  const { listDescription, componentType, listTitle } =
    props as TypeContainerListasFields;

  const items: { detail: string; icon?: string }[] = listDescription.map(
    (li) => {
      return {
        detail: li
      };
    }
  );

  return (
    <Container layout="100">
      <ListContainerComponent
        ordered={componentType.toString() === Type.Ordered ? true : false}
        title={listTitle}
        items={items}
      />
    </Container>
  );
};
