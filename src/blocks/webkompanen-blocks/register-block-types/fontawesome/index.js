import initRegisterFormatType from '../../utils/init-register-format-type'
import edit from './edit';

const name = 'webkompanen-blocks/fontawesomeicon';

export const metadata = {
	title: 'Font Awesome',
    tagName: 'i',
    className: 'fa-solid',
    edit: edit
}

export const init = () => initRegisterFormatType({
	name,
	metadata
})