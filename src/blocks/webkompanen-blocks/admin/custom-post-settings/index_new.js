import { store as coreStore, useEntityProp } from "@wordpress/core-data";
import { useDispatch } from '@wordpress/data';
import { 
	__experimentalInputControl as InputControl 
} from '@wordpress/components';
const { __ } = wp.i18n;
const {
	BaseControl,
	Button,
	ExternalLink,
	Panel,
	PanelBody,
	TabPanel,
	DropZoneProvider,
	RangeControl,
	FormFileUpload,
	DropZone,
	PanelRow,
	Placeholder,
	Spinner,
	ColorPicker,
	TextControl,
	ToggleControl,
	SelectControl
} = wp.components;
 



 
const emailSettings = () => {
    
    const [emailSetting, setEmailaddressSettings] = useEntityProp(
        "root",
        "site",
        "emailaddress"
    );

    const { saveEmailaddressSettingsRecord } = useDispatch(coreStore);

    const onEmailSettingChanged = (value) => {
        setEmailaddressSettings(value);
        saveEmailaddressSettingsRecord("root", "site", undefined, {
            emailaddress: value,
        });

    };


		return (
			<Fragment>
                <TabPanel
	                className="my-tab-panel"
	                activeClass="active-tab"
	                orientation="horizontal"
	                initialTabName="tab2"
	                onSelect={ (tabName) => console.log( 'Selecting tab', tabName ) }
	                tabs={ [
		                {
			                name: 'tab1',
			                title: 'E-mailinstellingen',
			                className: 'tab-one',
		                },
	                ] }>
	                    {
		                ( tab ) => (
			                <PanelBody>
				                { 
                                    (tab.title === 'E-mailinstellingen') ? (
                                        <>
                                            <InputControl
                                                label={__('Mailserver', 'webkompanen')}
                                                labelPosition='top'
                                                value={ this.state.emailserveraddress }
                                                id='emailserveraddress'
                                                type='text'
                                                isPressEnterToChange
                                                onChange={ 
                                                    ( nextValue ) => {
                                                    }
                                                }
                                            />
						                    <InputControl
							                    label={__('Email address', 'webkompanen')}
							                    labelPosition='top'
							                    value={ this.state.emailaddress }
							                    id='emailaddress'
							                    type='text'
							                    isPressEnterToChange
							                    onChange={ 
                                                    ( nextValue ) => {
                                                        onEmailSettingChanged(nextValue)
								                    }
							                    }
						                    />
                                        </>
                                    ) : null
                                }
			                </PanelBody>
		                )
	                    }
                </TabPanel>
			</Fragment>
		);
	}

export default emailSettings;