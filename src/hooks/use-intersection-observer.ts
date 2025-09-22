import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
	threshold?: number
	rootMargin?: string
}

export const useIntersectionObserver = ({
	threshold = 0.2,
	rootMargin = '-50px'
}: UseIntersectionObserverProps = {}) => {
	const [isInView, setIsInView] = useState(false)
	const [hasAnimated, setHasAnimated] = useState(false)
	const ref = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsInView(true)
					setHasAnimated(true)
					// Optional: Unobserve after first animation
					if (ref.current) {
						observer.unobserve(ref.current)
					}
				}
			},
			{
				threshold,
				rootMargin,
			}
		)

		const currentRef = ref.current
		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [threshold, rootMargin, hasAnimated])

	return { ref, isInView }
}