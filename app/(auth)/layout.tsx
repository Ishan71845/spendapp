import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex justify-center pt-35 '>{children}</div>
  )
}

export default AuthLayout