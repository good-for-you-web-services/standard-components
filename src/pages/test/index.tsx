import { HeroSection } from '../../../lib/components/sections/hero-section';
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
		<Page heading={<h1 className={styles['heading']}>This is a Page</h1>}>
			<StandardSection
				className={styles['section']}
				heading={<h2 className={styles['heading']}>This is a Standard Section</h2>}
			>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est
					turpis. Vestibulum quam ante, posuere at augue lacinia, sollicitudin vestibulum
					lacus. Curabitur dignissim elementum ipsum. Donec at enim mattis, euismod quam
					sed, ornare mi. Ut a elit sit amet nunc suscipit lobortis. Sed eget ligula ac
					libero condimentum varius. Nullam sem felis, vehicula quis turpis a, finibus
					laoreet quam. Vestibulum lacus mauris, congue sit amet placerat ac, laoreet quis
					ex. Nulla vel porttitor velit, eu molestie lectus. Donec erat leo, rutrum sed
					eleifend et, aliquet et nisi. Vestibulum venenatis hendrerit maximus. Phasellus
					a nisl ut ligula cursus malesuada. Curabitur in lacus ut odio aliquet venenatis
					sed ac elit. Curabitur efficitur, ipsum lacinia tempus consequat, sapien ex
					ultricies sapien, ac ultrices nibh dui eget elit. Praesent convallis lectus a
					diam euismod rhoncus. Pellentesque libero dolor, rhoncus quis porta sed,
					faucibus vel ligula. Sed vulputate mauris tempus urna tempor, ut vulputate augue
					luctus.
				</div>
			</StandardSection>
			<HeroSection
				className={styles['section']}
				heading={<h2 className={styles['heading']}>This is a Hero Section</h2>}
			>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est
					turpis. Vestibulum quam ante, posuere at augue lacinia, sollicitudin vestibulum
					lacus. Curabitur dignissim elementum ipsum. Donec at enim mattis, euismod quam
					sed, ornare mi. Ut a elit sit amet nunc suscipit lobortis. Sed eget ligula ac
					libero condimentum varius. Nullam sem felis, vehicula quis turpis a, finibus
					laoreet quam. Vestibulum lacus mauris, congue sit amet placerat ac, laoreet quis
					ex. Nulla vel porttitor velit, eu molestie lectus.
				</div>
				<div>
					Donec erat leo, rutrum sed eleifend et, aliquet et nisi. Vestibulum venenatis
					hendrerit maximus. Phasellus a nisl ut ligula cursus malesuada. Curabitur in
					lacus ut odio aliquet venenatis sed ac elit. Curabitur efficitur, ipsum lacinia
					tempus consequat, sapien ex ultricies sapien, ac ultrices nibh dui eget elit.
					Praesent convallis lectus a diam euismod rhoncus. Pellentesque libero dolor,
					rhoncus quis porta sed, faucibus vel ligula. Sed vulputate mauris tempus urna
					tempor, ut vulputate augue luctus.
				</div>
			</HeroSection>
			<StandardSection
				className={styles['section']}
				heading={<h2 className={styles['heading']}>Buttons</h2>}
			>
				<div className={styles['buttons-section']}>
					<StandardButton>Button 1</StandardButton>
					<StandardButton appearance='outline'>Button 2</StandardButton>
					<RadioButton name='radio-group-one'>Radio Button 1</RadioButton>
					<RadioButton name='radio-group-one' appearance='outline'>
						Radio Button 2
					</RadioButton>
					<ButtonGroup>
						<RadioButton name='radio-group-2' defaultChecked>
							1
						</RadioButton>
						<RadioButton name='radio-group-2'>2</RadioButton>
						<RadioButton name='radio-group-2'>3</RadioButton>
					</ButtonGroup>
					<AnchorButton href='https://google.com' target='_blank'>
						Anchor Button
					</AnchorButton>
					<AnchorButton appearance='outline' href='https://google.com' target='_blank'>
						Anchor Button
					</AnchorButton>
				</div>
			</StandardSection>
		</Page>
	);
}
