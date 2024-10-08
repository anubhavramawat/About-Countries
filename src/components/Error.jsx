import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>Something went wrong. {error.status}</div>
  )
}
