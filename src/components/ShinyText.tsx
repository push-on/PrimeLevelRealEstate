import { useEffect } from 'react'

interface ShinyTextProps {
	children: string
	speedSec?: number
	className?: string
	highlightColor?: string
	baseColor?: string
	overlayOpacity?: number
}

// Inject keyframes once
function ensureShinyKeyframes() {
	if (typeof document === 'undefined') return
	const existing = document.getElementById('shiny-text-styles')
	if (existing) return

	const style = document.createElement('style')
	style.id = 'shiny-text-styles'
	style.textContent = `@keyframes shiny-text-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`
	document.head.appendChild(style)
}

export default function ShinyText({
	children,
	speedSec = 3,
	className,
	highlightColor = 'hsla(43, 45%, 64%, 0.9)',
	baseColor = 'currentColor',
	overlayOpacity = 1,
}: ShinyTextProps) {
	useEffect(() => {
		ensureShinyKeyframes()
	}, [])

	const wrapperStyle: React.CSSProperties = {
		position: 'relative',
		display: 'inline-block',
		color: baseColor,
	}

	const overlayStyle: React.CSSProperties = {
		position: 'absolute',
		inset: 0,
		backgroundImage: `linear-gradient(110deg, transparent 0%, transparent 40%, ${highlightColor} 50%, transparent 60%, transparent 100%)`,
		backgroundSize: '200% 100%',
		animationName: 'shiny-text-shimmer',
		animationDuration: `${speedSec}s`,
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		color: 'transparent',
		opacity: overlayOpacity,
		pointerEvents: 'none',
		willChange: 'background-position',
	}

	return (
		<span className={className} style={wrapperStyle}>
			<span>{children}</span>
			<span aria-hidden style={overlayStyle}>{children}</span>
		</span>
	)
}
