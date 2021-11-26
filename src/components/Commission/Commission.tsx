import React, { useState } from 'react'
import Switch from '../Switch'
import styles from './Commission.module.css'

const Commission: React.FC = () => {
	const [value, setValue] = useState(5)
	const [isChecked, setIsChecked] = useState(false)

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
					onChange={(e) => setValue(parseInt(e.target.value))}
				/>
			</div>
		</div>
	)
}

export default Commission
