export type Params = {
  children?: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
  defaultOpenColor?: string;
  bgOpenColor?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant: 'default' | 'uilo' | 'uala';
};

export type Icon = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
      contentType: string;
    };
  };
};
