import { forwardRef } from 'react';
import { ButtonStyles } from "./style";

export const ButtonUI = forwardRef((props, ref) => (
  <ButtonStyles ref={ref} {...props} />
));

