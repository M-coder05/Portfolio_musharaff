import { useEffect } from 'react'

export default function Analytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_URL?.trim()

  useEffect(() => {
    if (!endpoint) return undefined
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://gc.zgo.at/count.js'
    script.dataset.goatcounter = endpoint
    document.head.appendChild(script)
    return () => script.remove()
  }, [endpoint])

  return null
}
