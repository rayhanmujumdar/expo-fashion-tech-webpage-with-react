import { TProps } from "../../interface/Props";

export default function Title({ children, className, ...props }: TProps) {
  return (
    <h3 className={`text-3xl uppercase md:text-title z-10 ${className}`} {...props}>{children}</h3>
  )
}
