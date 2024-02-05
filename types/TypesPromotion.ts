type Image = {
  src: string;
  alt: string;
};

export type Promotion = {
  id: string;
  name: string;
  slug: string;
  lastUpdate: string;
  isFeatured: boolean;
  promotionType: 'Canjes de puntos Ualá+' | 'Descuentos';
  isUalaMas: boolean;
  card: {
    title: string;
    description: string;
  };
  logo: Image;
  categories?: string[];
  level?: string;
  payment:
    | {
        pointsPayment: false;
        paymentMethods: {
          title: string;
          methods: string[];
        };
      }
    | {
        pointsPayment: true;
        points: {
          title: string;
          amount: string;
        };
      };
  locations?: string[];
  days?: string[];
  commerceType?: string[];
};
