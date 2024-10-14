import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

type Props = {}

export default function ErrorDetail({}: Props) {
    const error = useRouteError()
    return (
    <div>{isRouteErrorResponse(error) ? 'Página no encontrada' : `Ha ocurrido un error: ${(error as Error).message}`}</div>
  )
}