import React from 'react'

type ErrorApiFetchProps = {
  msg: string;
}

const ErrorApiFetch = ({ msg }: ErrorApiFetchProps) => {
  return (
      <>
      <p>Error: {msg}</p>
      </>
  )
}

export default ErrorApiFetch