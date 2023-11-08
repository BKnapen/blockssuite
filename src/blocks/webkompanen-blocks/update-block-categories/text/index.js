import initBlockUpdate from '../../utils/init-update-category'
import {
	text
} from '../../icons'

const name = 'webkompanen-blocks/text';

export const metadata = {
	icon: text,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})