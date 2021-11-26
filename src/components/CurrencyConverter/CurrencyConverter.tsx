import { useState } from 'react'
import Commission from '../Commission'
import IconArrowRight from '../Icons/IconArrowRight'
import InputGroup from '../InputGroup'
import styles from './CurrencyConverter.module.css'

const CurrencyConverter: React.FC = () => {
	const [usd, setUsd] = useState(0)
	const [eur, setEur] = useState(0)
	const exchangeRate = 0.85

	const handleEurChange = (amount: number) => {
		setEur(usd * exchangeRate * amount)
	}

	return (
		<div className={styles.container}>
			<h2>Currency Converter</h2>
			<div className={styles.currencyContainer}>
				<InputGroup label="usd" amount={usd} onChange={setUsd} />
				<div className={styles.iconWrapper}>
					<IconArrowRight />
				</div>
				<InputGroup label="eur" amount={eur} onChange={handleEurChange} />
			</div>
			<Commission />
		</div>
	)
}

export default CurrencyConverter
