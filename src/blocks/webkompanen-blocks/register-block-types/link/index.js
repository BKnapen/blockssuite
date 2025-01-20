import initRegisterFormatType from '../../utils/init-register-format-type'
import edit from './edit';

const name = 'webkompanen-blocks/href';

export const metadata = {
	title: 'Url',
    tagName: 'a',
    className: 'link-btn',
    href: null,
    target: null,
    rel: null,
    edit: edit
}

export const init = () => initRegisterFormatType({
	name,
	metadata
})