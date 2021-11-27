import { atom, selector, useRecoilState } from 'recoil'
import Commission from '../Commission'
import { commissionEnabledState, commissionState } from '../Commission/Commission'
import IconArrowRight from '../Icons/IconArrowRight'
import InputGroup from '../InputGroup'
import styles from './CurrencyConverter.module.css'

const exchangeRate = 0.83

export const addCommission = (amount: number, commission: number) => {
	return amount / (1 - commission / 100)
}

export const removeCommission = (amount: number, commission: number) => {
	return amount * (1 - commission / 100)
}

export const usdState = atom({
	key: 'usd',
	default: 0,
})

export const eurState = selector<number>({
	key: 'eur',
	get: ({ get }) => {
		let usd = get(usdState)

		const isCommissionEnabled = get(commissionEnabledState)
		if (isCommissionEnabled) {
			const commission = get(commissionState)
			usd = removeCommission(usd, commission)
		}

		return exchangeRate * usd
	},
	set: ({ get, set }, newValue) => {
		// @ts-ignore
		let newUsdValue = newValue / exchangeRate

		const isCommissionEnabled = get(commissionEnabledState)
		if (isCommissionEnabled) {
			const commission = get(commissionState)
			newUsdValue = addCommission(newUsdValue, commission)
		}

		set(usdState, newUsdValue)
	},
})

const CurrencyConverter: React.FC = () => {
	const [usd, setUsd] = useRecoilState(usdState)
	const [eur, setEur] = useRecoilState(eurState)

	return (
		<div className={styles.container}>
			<h2>Currency Converter</h2>
			<div className={styles.currencyContainer}>
				<InputGroup label="usd" amount={usd} onChange={setUsd} />
				<div className={styles.iconWrapper}>
					<IconArrowRight />
				</div>
				<InputGroup label="eur" amount={eur} onChange={setEur} />
			</div>
			<Commission />
		</div>
	)
}

export default CurrencyConverter
