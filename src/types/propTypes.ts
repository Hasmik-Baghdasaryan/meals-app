import type { LinkProps } from "react-router-dom";
import type { StringOrNull } from "./meal";
import type { Category } from "./category";
import type { Status } from "./types";

export type BaseButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export type NativeButtonProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<"button"> & {
    to?: undefined;
    href?: undefined;
  };

export type ExternalLinkProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
    to?: undefined;
  };

export type InternalLinkProps = BaseButtonProps &
  Omit<LinkProps, "to"> & {
    to: LinkProps["to"];
    href?: undefined;
  };

export type ButtonProps = NativeButtonProps | ExternalLinkProps | InternalLinkProps;

export type ActionProps = {
  youtube: StringOrNull;
  source: StringOrNull;
};

export type MessageProps = {
  text: string | null;
  type?: "info" | "error";
  role: "alert" | "status";
};

export type CardProps = {
  src: string;
  title: string;
  description?: string;
  country?: string;
};

export type CardGridProps = {
  children: React.ReactNode;
};

export type CardLinkProps = {
  to: LinkProps["to"];
  children: React.ReactNode;
};

export type ContentByStateProps = {
  status: Status;
  error: string | null;
  isEmpty?: boolean;
  loadingText: string;
  emptyText?: string;
  notFoundText?: string;
  children: React.ReactNode;
};

export type MealImageProps = {
  src: string | null | undefined;
  alt: string | undefined;
};

export type PageTitleProps = {
  children?: React.ReactNode;
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type CategoryItemProps = {
  category: Category;
};

export type FavoriteMeal = {
  id: string;
  name: string;
  thumb: string;
  category: string;
};
export type FavoritesRootState = {
  items: FavoriteMeal[];
};
