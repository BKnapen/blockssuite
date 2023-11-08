import initBlockUpdate from '../../utils/init-update-category'
import {
	forms
} from '../../icons'

const name = 'webkompanen-blocks/forms';

export const metadata = {
	icon: forms,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})