import cln from 'classnames'
import React from 'react'
import styles from './Switch.module.css'

type SwitchProps = {
	isChecked: boolean
	onChange: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ isChecked, onChange }) => {
	return (
		<label className={styles.switchLabel}>
			<input
				className={styles.switchInput}
				type="checkbox"
				id="includeCommission"
				checked={isChecked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<span className={cln(styles.switchContainer, isChecked && styles.checked)}>
				<span className={cln(styles.switchThumb, isChecked && styles.checked)}></span>
			</span>
		</label>
	)
}

export default Switch
