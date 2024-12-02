import {
	AnchorButton,
	ButtonGroup,
	Page,
	RadioButton,
	StandardButton,
	StandardSection,
} from '../../../lib/main';
import styles from './styles.module.scss';

export default function Test() {
	return (
		<Page>
			<StandardSection>
				<h1 className={styles['heading']}>Buttons</h1>
				<div className={styles['buttons-section']}>
					<div className={styles['buttons-section']}>
						<StandardButton>Button 1</StandardButton>
						<StandardButton appearance='outline'>Button 2</StandardButton>
					</div>
					<div className={styles['buttons-section']}>
						<RadioButton name='radio-group-one'>Radio Button 1</RadioButton>
						<RadioButton name='radio-group-one' appearance='outline'>
							Radio Button 2
						</RadioButton>
					</div>
					<div className={styles['buttons-section']}>
						<ButtonGroup>
							<RadioButton name='radio-group-2' defaultChecked>
								1
							</RadioButton>
							<RadioButton name='radio-group-2'>2</RadioButton>
							<RadioButton name='radio-group-2'>3</RadioButton>
						</ButtonGroup>
					</div>
					<div className={styles['buttons-section']}>
						<AnchorButton href='https://google.com' target='_blank'>
							Anchor Button
						</AnchorButton>
						<AnchorButton
							appearance='outline'
							href='https://google.com'
							target='_blank'
						>
							Anchor Button
						</AnchorButton>
					</div>
				</div>
			</StandardSection>
		</Page>
	);
}
