import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
	end: number
	durationMs?: number
	start?: number
	decimals?: number
	prefix?: string
	suffix?: string
	easing?: 'linear' | 'easeOutCubic'
	className?: string
}

function easeOutCubic(t: number): number {
	return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({
	end,
	durationMs = 2000,
	start = 0,
	decimals = 0,
	prefix = '',
	suffix = '',
	easing = 'easeOutCubic',
	className,
}: CountUpProps) {
	const ref = useRef<HTMLSpanElement | null>(null)
	const [displayValue, setDisplayValue] = useState(start)
	const [hasStarted, setHasStarted] = useState(false)

	useEffect(() => {
		setHasStarted(true)
	}, [])

	useEffect(() => {
		let rafId = 0
		const startTime = performance.now()

		const animate = () => {
			const now = performance.now()
			const elapsed = now - startTime
			const t = Math.min(1, elapsed / durationMs)
			const progress = easing === 'linear' ? t : easeOutCubic(t)
			const current = start + (end - start) * progress
			setDisplayValue(current)

			if (t < 1) {
				rafId = requestAnimationFrame(animate)
			} else {
				setDisplayValue(end)
			}
		}

		rafId = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(rafId)
	}, [durationMs, start, end, easing])

	const formatted = new Intl.NumberFormat(undefined, {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	}).format(Number(displayValue.toFixed(decimals)))

	return (
		<span ref={ref} className={className}>
			{prefix}
			{formatted}
			{suffix}
		</span>
	)
}
