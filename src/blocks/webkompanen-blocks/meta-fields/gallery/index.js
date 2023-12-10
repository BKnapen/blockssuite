const { __ } = wp.i18n;
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect, withSelect, withDispatch, useDispatch  } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { PanelRow, TextControl } from '@wordpress/components';

import initPlugin from '../../utils/init-register-plugin'

const name = 'field-location';

const GalleryMetaFieldLocation = () => {
    
    //const blockProps = useBlockProps();

    const postType = useSelect(
        ( select ) => select( 'core/editor' ).getCurrentPostType(),
        []
    );

    //console.log('postType');

    if ( 'galleries' !== postType ) return null;  

    const onChangeHandeler = (newValue, )=>{

    }
    const { gallerie_location, gallerie_edition } = useSelect( select => {

		const gallerie_location = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'gallerie_location' ];
        const gallerie_edition = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'gallerie_edition' ];
		return {
			gallerie_location: gallerie_location,
            gallerie_edition: gallerie_edition
		}
	})

    const { editPost } = useDispatch( 'core/editor', [ gallerie_location, gallerie_edition ] )
    return(
        <PluginDocumentSettingPanel
            name="custom-panel"
            title={__('Custom Panel', 'webkompanen')}
            className="custom-panel"
        >
            <TextControl
                label={__('Edition', 'webkompanen')}
                value={ gallerie_edition }
                onChange={ ( newValue ) =>
                    editPost( { meta: { gallerie_edition: newValue } } )
                }
            />
            <TextControl
                label={__('Gallery URL', 'webkompanen')}
                value={ gallerie_location }
                onChange={ ( newValue ) =>
                    editPost( { meta: { gallerie_location: newValue } } )
                }
            />
        </PluginDocumentSettingPanel>
    )
}

export const settings = {
	render: GalleryMetaFieldLocation,
    icon: 'palmtree'
}

export const init = () => initPlugin({
	name,
	settings
})