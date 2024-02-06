import { Icon, Title } from '@uala/abra';

export interface Props {
  title?: string;
  paragraph?: [string];
  iconName?: string;
  iconLabel?: string;
  order?: string;
  children?: any;
}

export const PromotionDetail = ({
  title,
  paragraph,
  iconName,
  iconLabel = '',
  order = '',
  children
}: Props) => {
  function formatArrayToString(arr) {
    const length = arr.length;

    return length === 0
      ? ''
      : length === 1
      ? arr[0]
      : `${arr.slice(0, -1).join(', ')} o ${arr[length - 1]}`;
  }
  return (
    <div className={`flex gap-4 ${order}`}>
      <div className="min-w-[30px] h-[30px] flex items-center justify-center border rounded-full bg-blue-250/10">
        <Icon size="md" name={iconName} color="primary" label={iconLabel} />
      </div>
      <div className="flex flex-col">
        <Title as="h5" size="md" css={{ color: '#757575', fontWeight: '600' }}>
          {title}
        </Title>
        {paragraph && (
          <p className="text-gray-150 text-[18px] pr-20">
            {formatArrayToString(paragraph)}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
