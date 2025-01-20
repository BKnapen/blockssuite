import { __ } from '@wordpress/i18n';
import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
//import { getTopicsElementsFormat } from './utils';
import { useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
	SelectControl,
	Button,
	__experimentalText as Text,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Spinner,
	withNotices,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';


// source "data" definition 
// "defaultLayouts" definition 
// "fields" definition 

import '@wordpress/dataviews/build-style/styles.css';
import '@wordpress/components/build-style/styles.css';

// source "data" definition
import { dataPortfolio } from './data';

// "defaultLayouts" definition
const primaryField = 'id';
const mediaField = 'featured_media';

const getFeaturedMedia = (requestFileID) => {
	console.log(requestFileID)
	try {

		wp.apiFetch( {
			path: `/wp/v2/media/${requestFileID}`,
			method: 'GET',
		} )
		.then( 
			(response) => {
				console.log(response)
				console.log(response.source_url)
				document.querySelector('img[data-image="'+requestFileID+'"]').setAttribute('src', response.source_url)
				return  response.source_url
			}
		)
	}
	catch (error) {
		console.log(error)
		return  ''
	}
	finally {
	}
}

const defaultLayouts = {
	table: {
		layout: {
			primaryField,
			mediaField
		},
	},
	grid: {
		layout: {
			primaryField,
			mediaField
		},
	},
};


//{Your-WP-Baseurl}/wp-json/wp/v2/media/{Yout-Attachment-ID}
// "fields" definition
const fields = [
	{
		id: 'id',
		label: __( 'ID' ),
		enableGlobalSearch: true,
	},
	{
		id: 'featured_media',
		label: __( 'Image' ),
		render: ( { item } ) => (
			<>
				{
					console.log(getFeaturedMedia(item.featured_media))
				}
				<img 
					style={{ width: '150px', objectFit: 'cover'}}
					data-image={item.featured_media} 
					alt='' 
					src={`${getFeaturedMedia(item.featured_media)}`} 
				/>
			</>
		),
		enableSorting: false,
	},
	{
		id: 'title',
		label: __( 'Title' ),
		getValue: ( { item } ) =>
			`${ item.title.rendered }`,
		render: ( { item } ) => (
			<a target="_blank" href={ item.link } rel="noreferrer">
				{ item.title.rendered }
			</a>
		),
		enableGlobalSearch: true,
	}
];

/*

	{
		id: 'topics',
		label: __( 'Topics' ),
		elements: getTopicsElementsFormat( dataPhotos ),
		render: ( { item } ) => {
			return (
				<div className="topic_photos">
					{ item.topics.map( ( topic ) => (
						<span key={ topic } className="topic_photo_item">
							{ topic.toUpperCase() }
						</span>
					) ) }
				</div>
			);
		},
		filterBy: {
			operators: [ 'isAny', 'isNone', 'isAll', 'isNotAll' ],
		},
		enableSorting: false,
	},
*/


const PortfolioDataview = () => {
    // "view" and "setView" definition
    // "processedData" and "paginationInfo" definition
    // "actions" definition 

    // "view" and "setView" definition
	const [ view, setView ] = useState( {
		type: 'table',
		perPage: 10,
		layout: defaultLayouts.table.layout,
		fields: [
			'id',
			'featured_media',
			'title',
		],
	} );

	console.log(dataPortfolio)
	console.log('dataPortfolio')
	console.log(view)
	console.log('view')
	console.log(fields)
	console.log('fields')

    // "processedData" and "paginationInfo" definition
	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( dataPortfolio, view, fields );
	}, [ view ] );

    // "actions" definition
	const actions = [
		{
			id: 'see-original',
			label: __( 'See Original' ),
			callback: ( [ item ] ) => {
				const urlPortfolio = item.link;
				window.open( urlPortfolio, '_blank' );
			},
		},
	];

    return (
        <DataViews
            data={ processedData }
            fields={ fields }
            view={ view }
            onChangeView={ setView }
            defaultLayouts={ defaultLayouts }
            actions={ actions }
            paginationInfo={ paginationInfo }
        />
    );
};

export default PortfolioDataview;