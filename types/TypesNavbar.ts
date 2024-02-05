export interface NavbarCategory {
  label: string;
  url?: string | null;
  dropdown: boolean;
  order?: number;
  sys: { id: string };
}

export interface NavbarVertical {
  label: string;
  url?: string | null;
  order?: number;
  primaryButton: boolean | null;
  navBarCategory: {
    sys: { id: string };
  };
  sys: { id: string };
}

export interface NavbarItem {
  label: string;
  url?: string | null;
  order?: number;
  primaryButton: boolean | null;
  navBarVertical: {
    sys: { id: string };
  };
}

interface NavbarMenuContentBase {
  label: string;
  url?: string;
  order?: number;
}

export interface NavbarMenuOption extends NavbarMenuContentBase {
  sections: NavbarSection[];
}

interface NavbarSection extends NavbarMenuContentBase {
  subSections: NavbarSubSection[];
}

interface NavbarSubSection extends NavbarMenuContentBase {}

export interface NavbarProps {
  logo: {
    description: string;
    href: string;
    url: string;
    width: number;
    height: number;
  };
  actionButton: {
    text: string;
    href: string;
  } | null;
  menuOptions: {
    options: [];
    position: string;
  };
}
