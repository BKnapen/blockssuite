import { 
	__experimentalInputControl as InputControl,
	__experimentalRadioGroup as RadioGroup, 
	__experimentalRadio as Radio,
	__experimentalSpacer as Spacer,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
const { __ } = wp.i18n;
const {
	RadioControl,
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
const GoogleFontsList = []

const {
	render,
	Component,
	Fragment
} = wp.element;

const {
	subscribe,
	select,
	dispatch,
} = wp.data;

class WebkompanenEmailSettings extends Component {
	constructor() {
		
		super( ...arguments);
		
		global.__WebkompanenEmailSettings = this;
		
		this.changeOptions = this.changeOptions.bind( this );
		
		this.state = {
			isAPILoaded: false,
			isAPISaving: false,
			toggleed: false,
			googleMapsAPIKey: '',
			googleGTMId: '',
			phpmailerHost: '',
			phpmailerSMTPAuth: false,
			phpmailerPort: null,
			phpmailerUsername: '',
			phpmailerPassword: '',
			phpmailerFrom: '',
			phpmailerFromName: '',
			phpmailerIsHTML: false,
			phpmailerSMTPSecure: '',
			phpmailerSMTPAutoTLS: false,
			phpmailerSender: ''
		};
	}

	componentDidMount() {
		wp.api.loadPromise.then( () => {
			this.settings = new wp.api.models.Settings();

			if ( false === this.state.isAPILoaded ) {
				this.settings.fetch().then( response => {
					console.log('settings response')
					console.log(response)
					this.setState({
						googleMapsAPIKey: response.googleMapsAPIKey,
						googleGTMId: response.googleGTMId,
						phpmailerHost: response.phpmailerHost,
						phpmailerSMTPAuth: response.phpmailerSMTPAuth,
						phpmailerPort: response.phpmailerPort,
						phpmailerUsername: response.phpmailerUsername,
						phpmailerPassword: response.phpmailerPassword,
						phpmailerFrom: response.phpmailerFrom,
						phpmailerFromName: response.phpmailerFromName,
						phpmailerIsHTML: response.phpmailerIsHTML,
						phpmailerSMTPSecure: response.phpmailerSMTPSecure,
						phpmailerSMTPAutoTLS: response.phpmailerSMTPAutoTLS,
						phpmailerSender: response.phpmailerSender,
						isAPILoaded: true
					});
				});
			}
		});
	}
	
	changeOptions( option, value ) {
		console.log(option)
		console.log(value)
		this.setState({ isAPISaving: true });

		const model = new wp.api.models.Settings({
			// eslint-disable-next-line camelcase
			[option]: value
		});

		model.save().then( response => {
			this.setState({
				[option]: response[option],
				isAPISaving: false
			});
		});
	}
		
	render() {

		return (
			<Fragment>
                <TabPanel
	                className="my-tab-panel"
	                activeClass="active-tab"
	                orientation="horizontal"
	                initialTabName="tab1"
	                onSelect={ (tabName) => console.log( 'Selecting tab', tabName ) }
	                tabs={ [
		                {
			                name: 'tab1',
			                title: 'E-mailinstellingen',
			                className: 'tab-one',
		                },
		                {
			                name: 'tab2',
			                title: 'Google TAG Manager',
			                className: 'tab-two',
		                },
		                {
			                name: 'tab3',
			                title: 'Google Maps',
			                className: 'tab-three',
		                },
	                ] }>
	                    {
		                ( tab ) => (
			                <PanelBody>
				                { 
                                    (tab.title === 'E-mailinstellingen') ? (
                                        <>
										 	<Spacer
                                				marginBottom={5}
                            				>
												<InputControl
													label={__('Senders email address', 'webkompanen')}
													labelPosition='top'
													value={ this.state.phpmailerFrom }
													id='phpmailerFrom'
													type='text'
													isPressEnterToChange
													onChange={ 
														( nextValue ) => {
															this.changeOptions(
																'phpmailerFrom', 
																nextValue
															)
														}
													}
												/>
											</Spacer>
										 	<Spacer
                                				marginBottom={5}
                            				>
						                    <InputControl
							                    label={__('Senders name', 'webkompanen')}
							                    labelPosition='top'
							                    value={ this.state.phpmailerFromName }
							                    id='phpmailerFromName'
							                    type='text'
							                    isPressEnterToChange
							                    onChange={ 
                                                    ( nextValue ) => {
									                    this.changeOptions(
										                    'phpmailerFromName', 
															nextValue
									                    )
								                    }
							                    }
						                    />
											</Spacer>
											<Spacer
											   marginBottom={5}
										   	>
                                            	<InputControl
                                                	label={__('Mailhost', 'webkompanen')}
                                                	labelPosition='top'
                                                	value={ this.state.phpmailerHost }
                                                	id='phpmailerHost'
                                                	type='text'
                                                	isPressEnterToChange
                                                	onChange={ 
                                                    	( nextValue ) => {
                                                        	this.changeOptions(
																'phpmailerHost', 
																nextValue
                                                        	)
                                                    	}
                                                	}
                                            	/>
											</Spacer>
											<Spacer
											   marginBottom={5}
										   	>
												<RadioGroup
													id="default-radiogroup"
													onChange={ 
														( nextValue ) => { 
															this.changeOptions(
																'phpmailerSMTPSecure', 
																nextValue
                                                        	)
														}
													}
													checked={this.state.phpmailerSMTPSecure}
													label={__('Encryption', 'webkompanen')}//aria-label - not label really
												>
													<Radio 
														value="none"
													>
														Geen
													</Radio>
													<Radio 
														value="ssl"
													>
														SSL
													</Radio>
													<Radio 
														value="tls"
													>
														TLS
													</Radio>
												</RadioGroup>
											</Spacer>
											<Spacer
											   marginBottom={5}
										   	>
						                    	<InputControl
							                    	label={__('SMTP Port', 'webkompanen')}
							                    	labelPosition='top'
							                    	value={ this.state.phpmailerPort }
							                    	id='phpmailerPort'
							                    	type='number'
							                    	isPressEnterToChange
							                    	onChange={ 
                                                    	( nextValue ) => {
									                    	this.changeOptions(
										                    	'phpmailerPort', 
																Number(nextValue)
									                    	)
								                    	}
							                    	}
						                    	/>
											</Spacer>
											<ToggleControl
												label={__('Auto-TLS', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.phpmailerSMTPAutoTLS  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'phpmailerSMTPAutoTLS', 
															! this.state.phpmailerSMTPAutoTLS
                                                        )
													}
												}
												style={
													{
														'margin-bottom': '0px'
													}
												}
											/>
											<ToggleControl
												label={__('Authentication', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.phpmailerSMTPAuth  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'phpmailerSMTPAuth', 
															! this.state.phpmailerSMTPAuth
                                                        )
													}
												}
												style={
													{
														'margin-bottom': '0px'
													}
												}
											/>
											<Spacer
											   marginBottom={5}
										   	>
						                    	<InputControl
							                    	label={__('SMTP username', 'webkompanen')}
							                    	labelPosition='top'
							                    	value={ this.state.phpmailerUsername }
							                   		id='emailusername'
							                    	type='text'
							                    	isPressEnterToChange
							                    	onChange={ 
                                                    	( nextValue ) => {
									                    	this.changeOptions(
										                    	'phpmailerUsername', 
																nextValue
									                    	)
								                    	}
							                    	}
						                    	/>
											</Spacer>
											<Spacer
											   marginBottom={5}
										   	>
						                    	<InputControl
							                    	label={__('SMTP password', 'webkompanen')}
							                    	labelPosition='top'
							                   		value={ this.state.phpmailerPassword }
							                    	id='phpmailerPassword'
							                    	type='password'
							                    	isPressEnterToChange
							                    	onChange={ 
                                                    	( nextValue ) => {
									                    	this.changeOptions(
										                    	'phpmailerPassword', 
																nextValue
									                    	)
								                    	}
							                    	}
						                    	/>
											</Spacer>
											<ToggleControl
												label={__('HTML', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.phpmailerIsHTML  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'phpmailerIsHTML', 
															! this.state.phpmailerIsHTML
                                                        )
													}
												}
												style={
													{
														'margin-bottom': '0px'
													}
												}
											/>
                                        </>
                                    ) : null
                                }
								{
									(tab.title === 'Google TAG Manager') ? (
										<InputControl
											label={__('GTM ID', 'webkompanen')}
											labelPosition='top'
											value={ this.state.googleGTMId }
											id='googleGTMId'
											type='text'
											isPressEnterToChange
											onChange={ 
												( nextValue ) => {
													this.changeOptions(
														'googleGTMId', 
														nextValue
													)
												}
											}
										/>
									) : null
								}
								{
									(tab.title === 'Google Maps') ? (
										<InputControl
											label={__('API key', 'webkompanen')}
											labelPosition='top'
											value={ this.state.googleMapsAPIKey }
											id='googleMapsAPIKey'
											type='text'
											isPressEnterToChange
											onChange={ 
												( nextValue ) => {
													this.changeOptions(
														'googleMapsAPIKey', 
														nextValue
													)
												}
											}
										/>
									) : null
								}
			                </PanelBody>
		                )
	                    }
                </TabPanel>
			</Fragment>
		);
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	wp.domReady( () => {
		//wp.api.loadPromise.done( function() {
		if(document.getElementById( 'webkompanen-custom-post-settings' )){
			try {
				render(
					<WebkompanenEmailSettings/>,
					document.getElementById( 'webkompanen-custom-post-settings' )
				);
			}
			finally{
  			};
		}
	});
});