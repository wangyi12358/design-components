import { cva } from 'class-variance-authority';

export const buttonCva = cva(['btn', 'btn-sm', 'btn-outline'], {
  variants: {
    size: {
      lg: ['btn-lg'],
      sm: ['btn-sm'],
      xs: ['btn-xs'],
    },
    status: {
      info: ['btn-info'],
      success: ['btn-success'],
      warning: ['btn-warning'],
      error: ['btn-error'],
    },
  },
});
