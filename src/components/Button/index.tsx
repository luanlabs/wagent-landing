import cn from 'classnames';

import buttonCustomStyles from './buttonCustomStyles';

export type VariantType =
  | 'basicBlack'
  | 'simpleWhite'
  | 'simpleDark'
  | 'simpleGreen'
  | 'bordered';

interface ButtonProps {
  text?: string;
  className?: string;
  variant: VariantType;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  text,
  onClick,
  variant,
  className,
  children,
}: ButtonProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center w-full rounded-full py-[7px] text-[12px] hover:cursor-pointer',
        className,
        buttonCustomStyles(variant),
      )}
      onClick={onClick}
    >
      {text ? text : children}
    </div>
  );
};

export default Button;
