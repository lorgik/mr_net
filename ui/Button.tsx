import Link from 'next/link';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
  href?: string;
  target?: string;
  rel?: string;
}

const getButtonClasses = (
  variant: 'default' | 'gradient',
  className?: string,
  disabled?: boolean
) => {
  const baseClasses =
    'uppercase text-black rounded-full flex justify-center items-center font-medium max-sm:w-full transition-all';

  const variantClasses = {
    default:
      'w-[334px] h-[36px] text-[14px] bg-[var(--accent-2)] hover:shadow-[0px_0px_16px_3px_rgba(0,228,240,0.8)]',
    gradient: 'relative group w-[334px] h-[52px] text-[20px] bg-gradient-3',
  };

  const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return cn(baseClasses, variantClasses[variant], stateClasses, className);
};

const Button = ({
  children,
  className,
  variant = 'default',
  type = 'button',
  href,
  onClick,
  target,
  rel,
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, className, disabled);

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        aria-disabled={disabled}
      >
        {variant === 'gradient' ? (
          <>
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-3 rounded-full blur-[13.5px]" />
            <span className="relative z-10">{children}</span>
          </>
        ) : (
          children
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={buttonClasses}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {variant === 'gradient' ? (
        <>
          <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-3 rounded-full blur-[13.5px]" />
          <span className="relative z-10">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
