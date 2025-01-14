import type { FC } from 'react'
import type { AppStatus } from '../apps.types'

interface Props {
  status: AppStatus
}

type DotColours = Record<AppStatus, string>

const DOT_COLOURS: DotColours = {
  Deleting: 'bg-yellow-600',
  Deploying: 'bg-yellow-600',
  DeploymentError: 'bg-red-600',
  Running: 'bg-green-500'
}

export const Status: FC<Props> = ({ status }) => {
  const dotColour = DOT_COLOURS[status]

  return (
    <p className="text-zinc-200 text-sm flex items-center">
      <span className="flex h-2 w-2 relative mr-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColour} opacity-75`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${dotColour}`}
        />
      </span>
      {status}
    </p>
  )
}
