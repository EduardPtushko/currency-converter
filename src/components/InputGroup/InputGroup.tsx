import styles from './InputGroup.module.css'

type InputGroupProps = {
	amount: number
	label: 'usd' | 'eur'
	onChange: (value: number) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ label, onChange, amount }) => {
	const symbol = label === 'usd' ? '$' : '€'

	return (
		<div className={styles.container}>
			<h4>{label}</h4>
			<input
				inputMode="decimal"
				pattern="[0-9]*(.[0-9]+)?"
				type="text"
				value={`${symbol} ${amount}`}
				onChange={(e) => {
					const withoutLabel = e.target.value.split(' ')[1]
					onChange(parseFloat(withoutLabel || '0'))
				}}
			/>
		</div>
	)
}

export default InputGroup
