import type { InputHTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
	appearance?: 'solid' | 'outline';
}

export function RadioButton({
	children,
	className,
	id,
	appearance = 'solid',
	...properties
}: Properties) {
	return (
		<label
			htmlFor={id}
			className={Combine([
				'standard-component',
				'radio-button',
				styles['radio-button'],
				className,
			])}
			data-appearance={appearance}
		>
			{children}
			<input
				type='radio'
				className={Combine(['radio-button-input', styles['radio-button-input']])}
				id={id}
				{...properties}
			/>
		</label>
	);
}
