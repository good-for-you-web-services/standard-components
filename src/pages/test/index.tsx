import { ButtonGroup } from '../../../lib/components/buttons/button-group';
import { Button, Page, PageSection, RadioButton } from '../../../lib/main';
import styles from './styles.module.scss';

export default function Test() {
	return (
		<Page>
			<PageSection>
				<h1 className={styles['heading']}>Buttons</h1>
				<div className={styles['buttons-section']}>
					<div className={styles['buttons-section']}>
						<Button>Button 1</Button>
						<Button appearance='outline'>Button 2</Button>
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
				</div>
			</PageSection>
		</Page>
	);
}
