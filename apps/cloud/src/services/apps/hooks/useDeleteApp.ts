import type { UseMutateFunction } from 'react-query'
import type { DeleteResponse } from 'm3o/app'
import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '../../../providers/ToastProvider'
import { apps } from '../apps.service'

interface UseDeleteApp {
  deleteApp: UseMutateFunction<DeleteResponse, unknown, string, unknown>
  isLoading: boolean
}

export function useDeleteApp(): UseDeleteApp {
  const { showToast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    (name: string) => apps.delete({ name }),
    {
      onSuccess: (response) => {
        console.log(response)
        queryClient.invalidateQueries('apps')
        showToast({
          type: 'Success',
          message: 'Successfully initialized deletion'
        })
      }
    }
  )

  return {
    deleteApp: mutate,
    isLoading
  }
}
