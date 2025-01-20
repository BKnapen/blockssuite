/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default function Header() {
	return (
		<div
			className="webkompanen-header"
			role="region"
			aria-label={ __( 'Standalone Editor top bar.', 'webkompanen' ) }
			tabIndex="-1"
		>
			<h1 className="webkompanen-header__title">
				{ __( 'Standalone Block Editor', 'webkompanen' ) }
			</h1>
		</div>
	);
}
