import dynamic from 'next/dynamic';

import * as components from './wrappers';

const RenderComponents = ({ content }) => {
  if (!content) return null;

  return content
    .filter(
      ({ componentName }) =>
        (componentName && components[componentName]) ||
        componentName.includes('Hero')
    )
    .map(({ componentName, id, ...rest }) => {
      const name = componentName.includes('Hero') ? 'Hero' : componentName;
      const Component = components[name];
      // const Component = dynamic(
      //   () => import(`./wrappers/${name}`).then((mod) => mod[name]),
      //   {
      //     loading: () => <p>Loading...</p>
      //   }
      // );
      return <Component key={id} {...rest} />;
    });
};

export default RenderComponents;
