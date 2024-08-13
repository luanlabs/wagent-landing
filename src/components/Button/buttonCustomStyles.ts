import { VariantType } from '.';

const buttonCustomStyles = (variant: VariantType) => {
  let buttonStyle;

  if (variant === 'bordered') {
    buttonStyle =
      'bg-white border border-[1.5px] border-[#F1F1F1] font-medium text-black';
  } else if (variant === 'simpleWhite') {
    buttonStyle =
      'bg-white border border-[1.5px] border-[#F1F1F1] !py-[6px] shadow-white-shadow font-medium h-[31px]';
  } else if (variant === 'simpleDark') {
    buttonStyle =
      ' shadow-dark-shadow border border-[1.5px] border-[#000] bg-[#2D322C] text-white font-medium ';
  } else if (variant === 'simpleGreen') {
    buttonStyle = 'shadow-green-shadow bg-[#293429] text-white font-medium ';
  } else if (variant === 'basicBlack') {
    buttonStyle = 'bg-[#333633] text-white font-medium';
  }

  return buttonStyle;
};

export default buttonCustomStyles;
