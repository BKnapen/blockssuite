//import { useState, useEffect } from "react";
import { SearchControl, Spinner } from '@wordpress/components';
import { useState, useEffect, render } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import apiFetch from '@wordpress/api-fetch';

global.__SelectedPage = []

function PageSearch() {

    const [ searchTerm, setSearchTerm ] = useState( '' );

    /*const [pages, setPages] = useState( [] );

    useEffect( () => {
        const url = '/wp-json/wp/v2/ardosz?search=' + searchTerm;
        apiFetch( { url } )
            .then( setPages )
    }, [searchTerm] );*/

    const { pages, hasResolved } = useSelect(
        ( select ) => {
            const query = {};
            if ( searchTerm ) {
                query.search = searchTerm;
            }
            const selectorArgs = [ 'postType', 'ardosz', query ];
            return {
                pages: select( coreDataStore ).getEntityRecords(
                    ...selectorArgs
                ),
                hasResolved: select( coreDataStore ).hasFinishedResolution(
                    'getEntityRecords',
                    selectorArgs
                ),
            };
        },
        [ searchTerm ]
    );

    return (
        <div>
            <SearchControl onChange={ setSearchTerm } value={ searchTerm } />
            <PagesList hasResolved={ hasResolved } pages={ pages } />
        </div>
    );
}

function PagesList( { hasResolved, pages } ) {
    if ( ! hasResolved ) {
        return <Spinner />;
    }
    if ( ! pages?.length ) {
        return <div>No results</div>;
    }

    return (
        <table className="wp-list-table widefat fixed striped table-view-list">
            <thead>
                <tr>
                    <td>Title</td>
                </tr>
            </thead>
            <tbody>
                { pages?.map( ( page ) => (
                    global.__SelectedPage.indexOf(Number( page.id )) > -1 ? (
                    <tr 
                        key={ page.id }
                    >
                        <td
                            role='button'
                            data-id={ page.id }
                            data-selected={ true }
                            style={
                                {
                                    background:'#007cba',
                                    color:'#ffffff'
                                }
                            }
                            onClick={
                                (e) => { 
                                    const index = global.__SelectedPage.indexOf(Number(e.target.getAttribute('data-id') ))
                                    e.target.getAttribute('data-selected') == 'false' ? (
                                        e.target.setAttribute('data-selected', true),
                                        e.target.setAttribute('style', 'background:#007cba; color:#ffffff;'),
                                        index > -1 ? '' : global.__SelectedPage.push( 
                                            Number(e.target.getAttribute('data-id'))
                                        )
                                    ):(
                                        e.target.setAttribute('data-selected', false),
                                        e.target.setAttribute('style', null),
                                        index > -1 ? global.__SelectedPage.splice(index, 1) : ''
                                    )
                                }
                            }
                        >
                            { decodeEntities( page.title.rendered ) }
                        </td>
                    </tr>
                    ):(
                        <tr 
                            key={ page.id }
                        >
                            <td
                                role='button'
                                data-id={ page.id }
                                data-selected={ false }
                                onClick={
                                    (e) => { 
                                        const index = global.__SelectedPage.indexOf(Number(e.target.getAttribute('data-id') ))
                                        e.target.getAttribute('data-selected') == 'false' ? (
                                            e.target.setAttribute('data-selected', true),
                                            e.target.setAttribute('style', 'background:#007cba; color:#ffffff;'),
                                            index > -1 ? '' : global.__SelectedPage.push( 
                                                Number(e.target.getAttribute('data-id'))
                                            )
                                        ):(
                                            e.target.setAttribute('data-selected', false),
                                            e.target.setAttribute('style', null),
                                            index > -1 ? global.__SelectedPage.splice(index, 1) : ''
                                        )
                                    }
                                }
                            >
                                { decodeEntities( page.title.rendered ) }
                            </td>
                        </tr>
                    )
                ) ) }
            </tbody>
        </table>
    );
}

export default PageSearch;