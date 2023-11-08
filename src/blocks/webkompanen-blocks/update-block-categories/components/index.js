import initBlockUpdate from '../../utils/init-update-category'
import {
	components
} from '../../icons'

const name = 'webkompanen-blocks/components';

export const metadata = {
	icon: components,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})