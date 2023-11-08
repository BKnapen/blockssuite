import initBlockUpdate from '../../utils/init-update-category'
import {
	gridfill
} from '../../icons'

const name = 'webkompanen-blocks/layout';

export const metadata = {
	icon: gridfill,
}

export const init = () => initBlockUpdate({
	name,
	metadata
})