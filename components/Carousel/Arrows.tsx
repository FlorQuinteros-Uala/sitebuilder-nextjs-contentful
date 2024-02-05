import { Icon } from '@uala/abra';
import type { ArrowProps } from 'types/TypesCarousel';

const ArrowPrev = (props: ArrowProps) => {
  const { className, onClick, color, changePosition } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ left: changePosition ? 0 : '-25px' }}
    >
      <Icon name="left" color={color} size="lg" />
    </button>
  );
};

const ArrowNext = (props: ArrowProps) => {
  const { className, onClick, color, changePosition } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ right: changePosition ? '25px' : '0px' }}
    >
      <Icon name="right" color={color} size="lg" />
    </button>
  );
};

export { ArrowNext, ArrowPrev };
