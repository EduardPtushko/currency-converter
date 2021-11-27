import React from 'react'
import { atom, useRecoilState } from 'recoil'
import Switch from '../Switch'
import styles from './Commission.module.css'

export const commissionState = atom({
	key: 'commission',
	default: 5,
})

export const commissionEnabledState = atom({
	key: 'checked',
	default: false,
})

const Commission: React.FC = () => {
	const [value, setValue] = useRecoilState(commissionState)
	const [isChecked, setIsChecked] = useRecoilState(commissionEnabledState)

	return (
		<div className={styles.container}>
			<div>
				<label className={styles.heading} htmlFor="includeCommission">
					Include forex commission?
				</label>
				<Switch isChecked={isChecked} onChange={setIsChecked} />
			</div>
			<div>
				<input
					inputMode="decimal"
					type="text"
					pattern="[0-9]*(.[0-9]+)?"
					role="spinbutton"
					aria-valuemin={-9007199254740991}
					aria-valuemax={9007199254740991}
					autoComplete="off"
					autoCorrect="off"
					value={value}
					disabled={!isChecked}
					onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
				/>
			</div>
		</div>
	)
}

export default Commission
