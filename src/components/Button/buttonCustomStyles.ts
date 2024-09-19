import { VariantType } from '.';

const buttonCustomStyles = (variant: VariantType) => {
  let buttonStyle;

  if (variant === 'bordered') {
    buttonStyle =
      'bg-white border-[1.5px] border-[#F1F1F1] font-medium text-black hover:bg-gray-200/30 active:bg-white';
  } else if (variant === 'simpleWhite') {
    buttonStyle =
      'bg-white border-[1.5px] border-[#F1F1F1] shadow-white-shadow font-medium hover:shadow-none active:bg-gray-50';
  } else if (variant === 'simpleDark') {
    buttonStyle =
      ' shadow-dark-shadow border-[1.5px] border-[#000] bg-[#2D322C] text-white font-medium hover:bg-[#2D322C]/90';
  } else if (variant === 'simpleGreen') {
    buttonStyle =
      'shadow-green-shadow bg-[#293429] text-white font-medium !cursor-default';
  } else if (variant === 'basicBlack') {
    buttonStyle = 'bg-[#333633] text-white font-medium hover:bg-[#333633]/90';
  } else if (variant === 'simpleWhiteStatic') {
    buttonStyle =
      'bg-white border-[1.5px] border-[#F1F1F1] !py-[6px] shadow-white-shadow font-medium h-[31px]';
  }

  return buttonStyle;
};

export default buttonCustomStyles;
