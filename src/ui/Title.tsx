import { TProps } from "../interface/Props";

export default function Title({ children, className, ...props }: TProps) {
  return (
    <h3 className={`text-title ${className}`} {...props}>{children}</h3>
  )
}
