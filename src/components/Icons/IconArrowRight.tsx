function IconArrowRight(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			stroke="currentColor"
			strokeWidth={1}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="prefix__feather prefix__feather-arrow-right"
			{...props}
		>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	)
}

export default IconArrowRight
