import initBlockUpdate from '../../utils/init-update-category'
import {
	embed
} from '../../icons'

const name = 'webkompanen-blocks/embed';

export const metadata = {
	icon: embed,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})