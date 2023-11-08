import initBlockUpdate from '../../utils/init-update-category'
import {
	content
} from '../../icons'

const name = 'webkompanen-blocks/content';

export const metadata = {
	icon: content,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})