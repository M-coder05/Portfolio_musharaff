import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export { gsap, ScrollTrigger }

export function animateCardBatch(container, animatedIds) {
  const cards = [...container.querySelectorAll('[data-gsap-card]')]
  const newCards = cards.filter((card) => !animatedIds.has(card.dataset.cardId))
  const animatedCards = cards.filter((card) => animatedIds.has(card.dataset.cardId))

  gsap.set(newCards, { autoAlpha: 0, y: 18 })
  if (animatedCards.length) {
    gsap.set(animatedCards, { clearProps: 'opacity,visibility,transform' })
  }

  if (newCards.length) {
    ScrollTrigger.batch(newCards, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        batch.forEach((card) => animatedIds.add(card.dataset.cardId))
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: 'power3.out',
          stagger: 0.1,
          overwrite: true,
          onComplete: () => gsap.set(batch, { clearProps: 'opacity,visibility,transform' }),
        })
      },
    })
  }
}

export function refreshAfterImages(container) {
  const refresh = () => ScrollTrigger.refresh()
  const pendingImages = [...container.querySelectorAll('img')].filter((image) => !image.complete)

  pendingImages.forEach((image) => image.addEventListener('load', refresh, { once: true }))
  refresh()

  return () => {
    pendingImages.forEach((image) => image.removeEventListener('load', refresh))
  }
}
