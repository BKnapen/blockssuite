/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary
import '@wordpress/format-library';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { serialize, parse } from '@wordpress/blocks';
import { uploadMedia } from '@wordpress/media-utils';

import {
	BlockBreadcrumb,
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockTools,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Sidebar from '../sidebar';

function BlockEditor({ settings: _settings }) {
	const [blocks, updateBlocks] = useState([]);
	const { createInfoNotice } = useDispatch('core/notices');

	const canUserCreateMedia = useSelect((select) => {
		const _canUserCreateMedia = select('core').canUser('create', 'media');
		return _canUserCreateMedia || _canUserCreateMedia !== false;
	}, []);

	const settings = useMemo(() => {
		if (!canUserCreateMedia) {
			return _settings;
		}
		return {
			..._settings,
			mediaUpload({ onError, ...rest }) {
				uploadMedia({
					wpAllowedMimeTypes: _settings.allowedMimeTypes,
					onError: ({ message }) => onError(message),
					...rest,
				});
			},
		};
	}, [canUserCreateMedia, _settings]);

	useEffect(() => {
		const storedBlocks = window.localStorage.getItem('webkompanenBlocks');

		if (storedBlocks?.length) {
			handleUpdateBlocks(() => parse(storedBlocks));
			createInfoNotice('Blocks loaded', {
				type: 'snackbar',
				isDismissible: true,
			});
		}
	}, []);

	/**
	 * Wrapper for updating blocks. Required as `onInput` callback passed to
	 * `BlockEditorProvider` is now called with more than 1 argument. Therefore
	 * attempting to setState directly via `updateBlocks` will trigger an error
	 * in React.
	 *
	 * @param  blocks
	 * @param  _blocks
	 */
	function handleUpdateBlocks(_blocks) {
		updateBlocks(_blocks);
	}

	function handlePersistBlocks(newBlocks) {
		updateBlocks(newBlocks);
		window.localStorage.setItem('webkompanenBlocks', serialize(newBlocks));
	}

	return (
		<div className="webkompanen-block-editor">
			<BlockEditorProvider
				value={blocks}
				onInput={handleUpdateBlocks}
				onChange={handlePersistBlocks}
				settings={settings}
			>
				<BlockBreadcrumb />
				<Sidebar.InspectorFill>
					<BlockInspector />
				</Sidebar.InspectorFill>
				<div className="editor-styles-wrapper">
					<BlockEditorKeyboardShortcuts.Register />
					<BlockTools>
						<WritingFlow>
							<ObserveTyping>
								<BlockList className="webkompanen-block-editor__block-list" />
							</ObserveTyping>
						</WritingFlow>
					</BlockTools>
				</div>
			</BlockEditorProvider>
		</div>
	);
}

export default BlockEditor;
