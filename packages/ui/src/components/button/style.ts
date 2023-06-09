import { cva } from 'class-variance-authority';

export const buttonCva = cva(['btn'], {
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
    type: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      accent: ['btn-accent'],
      ghost: ['btn-ghost'],
      link: ['btn-link'],
    },
  },
});
