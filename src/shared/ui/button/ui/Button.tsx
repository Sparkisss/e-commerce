// Button.tsx
import { ComponentProps, ElementType } from 'react'
import classes from './Button.module.css'

type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E
  children?: React.ReactNode
  className?: string
  icon?: string
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

export function Button<E extends ElementType = typeof defaultElement>({
  children,
  className,
  as,
  icon,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement

  return (
    <TagName className={`${classes.button} ${className || ''}`} {...otherProps}>
      {icon && <img src={icon} alt="icon" className={classes.button__icon} />}
      <span className={icon ? classes.button__textWithIcon : ''}>
        {children}
      </span>
    </TagName>
  )
}
