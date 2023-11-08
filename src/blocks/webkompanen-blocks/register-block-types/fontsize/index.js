import initRegisterFormatType from '../../utils/init-register-format-type'
import edit from './edit';

const name = 'webkompanen-blocks/fontsize';

export const metadata = {
	title: 'Font size',
    tagName: 'span',
    className: null,
    edit: edit
}

export const init = () => initRegisterFormatType({
	name,
	metadata
})