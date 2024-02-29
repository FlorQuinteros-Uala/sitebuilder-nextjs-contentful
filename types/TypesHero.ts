type ButtonProps = {
  text: string;
  url: string;
  textColor?: string;
};

export type PropsComp = {
  title?: string;
  paragraph?: string;
  section?: React.ReactNode | string;
  image?: React.ReactNode;
  btnProps?: ButtonProps;
  isFaqs?: boolean;
  hasButton?: boolean;
  darkBg?: boolean;
  brandUala?: boolean;
  mobileInverted?: boolean;
  buttonBg?: string;
  roundedImage?: boolean;
  isFullImage?: boolean;
  bgImage?: React.ReactNode;
  bgImageSrc?: string;
  buttonWidth?: string;
  isHome?: boolean;
  transparencyImage?: string;
  curvedImage?: boolean;
  bgCurveColor?: string;
  bgColor?: string;
  modalButton?: React.JSX.Element;
  openModal?: any;
  typographyColor?: string;
};
