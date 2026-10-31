import { cloneElement } from 'react'
import useInView from '../hooks/useInView'

export default function Reveal({ children, delay = 0 }) {
  const [ref, isInView] = useInView()
  const child = cloneElement(children, {
    ref,
    className: [children.props.className, 'reveal', isInView ? 'is-visible' : ''].filter(Boolean).join(' '),
    'data-revealed': isInView,
    style: { ...children.props.style, '--reveal-delay': `${delay}ms` },
  })

  return child
}
