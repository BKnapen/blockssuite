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
			chatGPTAPIKEY: '',
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
			showAgendaCustomPost: false,
			showCoursesCustomPost: false,
			showEventsCustomPost: false,
			showGalleriesCustomPost: false,
			showPortfolioCustomPost: false,
			showReferentiesCustomPost: false,
			showReviewsCustomPost: false,
			showLandingpagesCustomPost: false,
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
						chatGPTAPIKEY: response.chatGPTAPIKEY,
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
						showAgendaCustomPost: response.showAgendaCustomPost,
						showCoursesCustomPost: response.showCoursesCustomPost,
						showEventsCustomPost: response.showEventsCustomPost,
						showGalleriesCustomPost: response.showGalleriesCustomPost,
						showPortfolioCustomPost: response.showPortfolioCustomPost,
						showReferentiesCustomPost: response.showReferentiesCustomPost,
						showReviewsCustomPost: response.showReviewsCustomPost,
						showLandingpagesCustomPost: response.showLandingpagesCustomPost,
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
			                title: 'Chat GPT',
			                className: 'tab-two',
		                },
		                {
			                name: 'tab3',
			                title: 'Google TAG Manager',
			                className: 'tab-three',
		                },
		                {
			                name: 'tab4',
			                title: 'Google Maps',
			                className: 'tab-four',
		                },
		                {
			                name: 'tab5',
			                title: 'Custom post settings',
			                className: 'tab-five',
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
													label={__('Encryption', 'webkompanen')} //aria-label - not label really
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
							                    	label={__('SMTP port', 'webkompanen')}
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
							                    	label={__('SMTP-username', 'webkompanen')}
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
							                    	label={__('SMTP-password', 'webkompanen')}
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
									(tab.title === 'Chat GPT') ? (
										<InputControl
											label={__('Chat GPT API KEY', 'webkompanen')}
											labelPosition='top'
											value={ this.state.chatGPTAPIKEY }
											id='chatGPTAPIKEY'
											type='text'
											isPressEnterToChange
											onChange={ 
												( nextValue ) => {
													this.changeOptions(
														'chatGPTAPIKEY', 
														nextValue
													)
												}
											}
										/>
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
								{
									(tab.title === 'Custom post settings') ? (
										<>
											<ToggleControl
												label={__('Display calendar custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showAgendaCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showAgendaCustomPost', 
															! this.state.showAgendaCustomPost
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
												label={__('Display course custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showCoursesCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showCoursesCustomPost', 
															! this.state.showCoursesCustomPost
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
												label={__('Display events custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showEventsCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showEventsCustomPost', 
															! this.state.showEventsCustomPost
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
												label={__('Display gallery custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showGalleriesCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showGalleriesCustomPost', 
															! this.state.showGalleriesCustomPost
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
												label={__('Display portfolio custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showPortfolioCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showPortfolioCustomPost', 
															! this.state.showPortfolioCustomPost
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
												label={__('Display reference custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showReferentiesCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showReferentiesCustomPost', 
															! this.state.showReferentiesCustomPost
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
												label={__('Display reviews custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showReviewsCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showReviewsCustomPost', 
															! this.state.showReviewsCustomPost
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
												label={__('Display landing pages custom post', 'webkompanen')}
												help={ true ? '' : '' }
												checked={ this.state.showLandingpagesCustomPost  }
												onChange={ 
													(e) => { 
														this.changeOptions(
															'showLandingpagesCustomPost', 
															! this.state.showLandingpagesCustomPost
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
		if(document.getElementById( 'webkompanen-email-settings' )){
			try {
				render(
					<WebkompanenEmailSettings/>,
					document.getElementById( 'webkompanen-email-settings' )
				);
			}
			finally{
  			};
		}
	});
});