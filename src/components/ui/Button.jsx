import { forwardRef } from "react";
import PropTypes from "prop-types";
import { HiArrowRight } from "react-icons/hi";

const Button = forwardRef(({
  variant = "primary",
  size = "md",
  icon,
  onClick,
  children,
  ...props
}, ref) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-text hover:bg-secondary/90",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`
        rounded-lg font-medium transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${icon ? "flex items-center gap-2" : ""}
      `}
      {...props}
    >
      {children}
      {icon && <HiArrowRight className="h-5 w-5" />}
    </button>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;