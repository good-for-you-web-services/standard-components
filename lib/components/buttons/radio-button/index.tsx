import type { InputHTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
	appearance?: 'solid' | 'outline';
}

export function RadioButton({ appearance = 'solid', ...properties }: Properties) {
	const { children, className, id, ...otherProperties } = properties;

	return (
		<label
			className={Combine([
				'standard-component',
				'radio-button',
				styles['radio-button'],
				styles[appearance],
				className,
			])}
			htmlFor={id}
		>
			{children}
			<input
				type='radio'
				className={Combine(['radio-button-input', styles['radio-button-input']])}
				id={id}
				{...otherProperties}
			/>
		</label>
	);
}
