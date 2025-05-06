interface ErrorProps {
  error: string | null
}

export const Error = ({ error }: ErrorProps) => {
  return <div>Error: {error}</div>
}
