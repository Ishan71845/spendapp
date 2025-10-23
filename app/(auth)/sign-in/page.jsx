import { SignIn } from '@clerk/nextjs'
import React from 'react'
// (auth) in parantheses means it will not be rendered in  url
const SignInPage = () => {
  return (
    <SignIn/>
  )
}

export default SignInPage