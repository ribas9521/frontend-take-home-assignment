import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
  variant,
  VariantArgs,
  fontSize,
  grid
} from 'styled-system';

export const defaults = [
  boxShadow,
  color,
  space,
  flexbox,
  border,
  layout,
  position,
  typography,
  fontSize,
  grid
];

const commonViews = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export const viewType = variant({
  prop: 'styling',
  variants: {
    base: {
      ...commonViews
    },
    background: {
      ...commonViews,
      bg: 'bg'
    },
    row: {
      ...commonViews,
      flexDirection: 'row',
      '&:focus': {
        outline: 'none'
      }
    },
    column: {
      ...commonViews,
      flexDirection: 'column',
      '&:focus': {
        outline: 'none'
      }
    },
    grid: {
      ...commonViews,
      display: 'grid',
      alignItems: 'start'
    },
    overlay: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 999
    }
  }
} as VariantArgs);
