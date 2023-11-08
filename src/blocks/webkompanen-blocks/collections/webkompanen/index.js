import initBlockCollection from '../../utils/init-collection'
import {
	webkompanen
} from '../../icons'

const name = 'webkompanen-blocks';

export const metadata = {
	title: 'Webkompanen',
	icon: webkompanen,
}

export const init = () => initBlockCollection({
	name,
	metadata
})