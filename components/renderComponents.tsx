import * as components from './wrappers';

const RenderComponents = ({ content }) => {
  if (!content) return null;

  return (
    content
      // .filter(
      //   ({ componentName }) =>
      //     componentName !== 'Navbar' && componentName !== 'Footer'
      // )
      .map(({ componentName, id, ...rest }) => {
        const name = componentName.includes('Hero') ? 'Hero' : componentName;
        const Component = components[name];
        return <Component key={id} {...rest} />;
      })
  );
};

export default RenderComponents;
