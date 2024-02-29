import { Button } from '@uala/abra';
import { useIsMobile } from '@uala-labssupport/utils';

declare const window: Window & { dataLayer: Record<string, unknown>[] };

type ButtonProps = {
  mobileLink: string;
  customCss: object;
  cbOpenModal: () => void;
  openModal: boolean;
  dataLayerContent: {
    event: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
  };
  children?: React.ReactNode;
};

export const DownloadAppButton: React.FC<ButtonProps> = ({
  mobileLink,
  dataLayerContent,
  cbOpenModal,
  openModal = true,
  customCss,
  children
}) => {
  const isMobile = useIsMobile(768);

  return (
    <Button
      as="a"
      href={isMobile || !openModal ? mobileLink : undefined}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isMobile && openModal) {
          e.preventDefault();
          cbOpenModal && cbOpenModal();
        }
        window && window.dataLayer && window.dataLayer.push(dataLayerContent);
      }}
      size="md"
      variant="primary"
      css={{
        zIndex: 1,
        ...customCss
      }}
      isBlock={isMobile}
    >
      {children}
    </Button>
  );
};
