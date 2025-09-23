import clsx from "clsx";
import { FC, memo, ReactNode } from "react"


 const Container:FC<{
    children: ReactNode,
    className?: string
 }> = ({children,className}) => {
  return (
    <div className={clsx("max-w-[1920px] mx-auto px-6 md:px-8 xl:px-32",className)}>
      {children}
    </div>
  )
}
export default memo(Container);