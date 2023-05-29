import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function clsxMerge(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
