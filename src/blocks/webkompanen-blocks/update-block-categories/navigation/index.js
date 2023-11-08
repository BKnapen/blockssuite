import initBlockUpdate from '../../utils/init-update-category'
import {
	navigation
} from '../../icons'

const name = 'webkompanen-blocks/navigation';

export const metadata = {
	icon: navigation,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})