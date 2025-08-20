import {
  Code,
  FileText,
  FolderOpen,
  Home,
  Languages,
  Link2,
  Mail,
  Star,
  User,
} from "lucide-react";

export type NavigationItem = {
  name: string;
  href: string;
  icon: any;
  isSubItem?: boolean;
  parent?: string;
};

export const getNavigation = (t: (content: string) => string) => {
  return [
  { name: t("Home"), href: "/", icon: Home },
  { name: t("About"), href: "/about", icon: User },
  {
    name: t("My Stack"),
    href: "/about/my-stack",
    icon: Code,
    isSubItem: true,
    parent: t("About"),
  },
  {
    name: t("Favorites"),
    href: "/about/favorites",
    icon: Star,
    isSubItem: true,
    parent: t("About"),
  },
  { name: t("Projects"), href: "/projects", icon: FolderOpen },
  {
    name: t("Language Learning"),
    href: "/language-learning",
    icon: Languages,
    isSubItem: true,
    parent: t("Projects"),
  },
  { name: t("Posts"), href: "/posts", icon: FileText },
  { name: t("Recommended"), href: "/recommended", icon: Link2 },
  { name: t("Contact"), href: "/contact", icon: Mail },
];
};
