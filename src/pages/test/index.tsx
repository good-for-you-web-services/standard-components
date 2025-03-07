import { StandardPage, StandardSection } from '../../../lib/main';
import Icon from '../../../node_modules/bootstrap-icons/icons/globe.svg';
import styles from './styles.module.scss';

export default function Test() {
	return (
		<StandardPage
			meta={{
				sitename: 'Standard Components Test',
				title: 'Test Page',
				description: 'See how we build our websites with a set of standard components!',
				url: 'https://localhost:5174',
				image: Icon,
			}}
			heading={<h1 className={styles['heading']}>This is a Page</h1>}
		>
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
		</StandardPage>
	);
}
