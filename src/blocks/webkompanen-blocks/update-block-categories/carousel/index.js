import initBlockUpdate from '../../utils/init-update-category'
import {
	carousel
} from '../../icons'

const name = 'webkompanen-blocks/carousel';

export const metadata = {
	icon: carousel,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})