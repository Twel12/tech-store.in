import { useEffect, useState } from 'react'

export type Collection = {
  id: string
  handle: string
  title: string
  image?: string
}

type State =
  | { status: 'loading' }
  | { status: 'success'; collections: Collection[] }
  | { status: 'error'; message: string }

export function useCollections(): State {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${import.meta.env.VITE_API_URL}/api/collections`, {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`)
        return r.json() as Promise<Collection[]>
      })
      .then((collections) => setState({ status: 'success', collections }))
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === 'AbortError') return
        setState({ status: 'error', message: 'Failed to load categories' })
      })
    return () => controller.abort()
  }, [])

  return state
}
