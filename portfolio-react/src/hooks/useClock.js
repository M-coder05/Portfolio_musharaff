import { useEffect, useState } from 'react'

function getISTTime() {
  const formatted = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date())

  return `TIRUCHIRAPPALLI, IN • ${formatted} IST`
}

export default function useClock() {
  const [time, setTime] = useState(getISTTime)

  useEffect(() => {
    const intervalId = window.setInterval(() => setTime(getISTTime()), 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  return time
}
