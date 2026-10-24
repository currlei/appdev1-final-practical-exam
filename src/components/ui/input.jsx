import { forwardRef } from 'react'

const Input = forwardRef(({ className = '', type = 'text', ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    data-slot="input"
    className={['w-full min-w-0', className].filter(Boolean).join(' ')}
    {...props}
  />
))

Input.displayName = 'Input'

export { Input }
