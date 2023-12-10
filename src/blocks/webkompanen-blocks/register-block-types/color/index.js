import { __ } from '@wordpress/i18n';
import initRegisterFormatType from '../../utils/init-register-format-type'
import edit from './edit';

const name = 'webkompanen-blocks/color';

export const metadata = {
	title: __('Text color', 'webkompanen'),
    tagName: 'span',
    className: 'color-btn',
    href: null,
    edit: edit
}

export const init = () => initRegisterFormatType({
	name,
	metadata
})