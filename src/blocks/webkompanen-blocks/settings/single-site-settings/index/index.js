import { 
	__ 
} from '@wordpress/i18n'
import{
	render,
	Component,
	Fragment
} from '@wordpress/element';
import {
	BaseControl,
	Externallink,
	PanelBody,
	PanelRow,
	TabPanel,
	Button,
	Spinner,
	ToggleControl,
	Placeholder,
	SelectControl,
	__experimentalSpacer as Spacer,
	__experimentalNumberControl as NumberControl,
	__experimentalInputControl as InputControl
} from '@wordpress/components';

class SingleSiteSettings extends Component {
	constructor() {
		super( ...arguments );

		this.changeOptions = this.changeOptions.bind( this );

		this.state = {
			isAPILoaded: false,
			isAPISaving: false,
			webkompanen_phpmailer_is_smtp: false,
			webkompanen_phpmailer_host: '',
			webkompanen_phpmailer_smtpauth: false,
			webkompanen_phpmailer_port: 0,
			webkompanen_phpmailer_username: '',
			webkompanen_phpmailer_username: '',
			webkompanen_phpmailer_sender: '',
			webkompanen_phpmailer_from: '',
			webkompanen_phpmailer_from_name: '',
			webkompanen_phpmailer_is_html: false,
			webkompanen_app_auth: '',
		};
	}
	
	componentDidMount() {
		wp.api.loadPromise.then( () => {
			this.settings = new wp.api.models.Settings();

			if ( false === this.state.isAPILoaded ) {
				this.settings.fetch().then( response => {
					this.setState({
						webkompanen_phpmailer_is_smtp: Boolean( response.webkompanen_phpmailer_is_smtp ),
						webkompanen_phpmailer_host: response.webkompanen_phpmailer_host,
						webkompanen_phpmailer_smtpauth: Boolean(response.webkompanen_phpmailer_smtpauth),
						webkompanen_phpmailer_port: Number(response.webkompanen_phpmailer_port),
						webkompanen_phpmailer_username: response.webkompanen_phpmailer_username,
						webkompanen_phpmailer_password: response.webkompanen_phpmailer_password,
						webkompanen_phpmailer_smtp_secure: response.webkompanen_phpmailer_smtp_secure,
						webkompanen_phpmailer_sender: response.webkompanen_phpmailer_sender,
						webkompanen_phpmailer_from: response.webkompanen_phpmailer_from,
						webkompanen_phpmailer_from_name: response.webkompanen_phpmailer_from_name,
						webkompanen_phpmailer_is_html: Boolean( response.webkompanen_phpmailer_is_html ),
						webkompanen_app_auth: response.webkompanen_app_auth,
						isAPILoaded: true
					});
				});
			}
		});
	}

	changeOptions( option, value ) {
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

	render(){
		if ( ! this.state.isAPILoaded ) {
			return (
				<Placeholder>
					<Spinner/>
				</Placeholder>
			);
		}
		return(
			<>
				<h1>{webkompanen.blogName} settings</h1>
				<p>Url: <a href={ webkompanen.blogUrl }>{webkompanen.blogUrl}</a></p>
				<p>Taal: {webkompanen.blogLanguage}</p>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					orientation="horizontal"
					initialTabName="email"
					onSelect={ (tabName) => console.log( 'Selecting tab', tabName ) }
					tabs={ [
						{
							name: 'email',
							title: 'E-mail settings',
							className: 'tab-one',
						},
						{
							name: 'restapi',
							title: 'Rest API',
							className: 'tab-two',
						}
					] }
				>
					{
						( tab ) => (
							<PanelBody>
								<p>{ tab.title }</p>
								{
									tab.name === 'restapi' &&
									<>
										<InputControl
											label={__('Rest API', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_app_auth }
											disabled={ this.state.isAPISaving }
											type="password"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_app_auth: nextValue 
												}) 
											}
										/>
									</>
								}
								{
									tab.name === 'email' &&
									<>
										<Spacer
											marginBottom="5"
										>
											<ToggleControl
												label={ __( 'is SMTP?', 'webkompanen' ) }
												help={ __( 'Email login is SMTP', 'webkompanen' ) }
												checked={ this.state.webkompanen_phpmailer_is_smtp }
												disabled={ this.state.isAPISaving }
												onChange={ 
													() => this.changeOptions(
														'webkompanen_phpmailer_is_smtp', ! this.state.webkompanen_phpmailer_is_smtp 
													) 
												}
											/>
										</Spacer>
										<InputControl
											label={ __( 'Host', 'webkompanen' ) }
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_host }
											placeholder={ __( 'Host', 'webkompanen' ) }
											disabled={ this.state.isAPISaving }
											type="text"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_host: nextValue 
												}) 
											}
										/>
										<Spacer
											marginY="5"
										>
											<ToggleControl
												label={ __( 'SMTPAuth?', 'webkompanen' ) }
												help={ __( 'Use SMTPAuth' ) }
												checked={ this.state.webkompanen_phpmailer_smtpauth }
												disabled={ this.state.isAPISaving }
												onChange={ 
													() => this.changeOptions(
														'webkompanen_phpmailer_smtpauth', ! this.state.webkompanen_phpmailer_smtpauth 
													) 
												}
											/>
										</Spacer>
										<NumberControl
											label={__('Port', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_port }
											disabled={ this.state.isAPISaving }
											isDragEnabled
											isShiftStepEnabled
											onChange={ 
												( nextNumber ) => this.setState({
													webkompanen_phpmailer_port: Number( nextNumber )
												}) 
											}
										/>
										<InputControl
											label={__('Username', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_username }
											disabled={ this.state.isAPISaving }
											type="text"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_username: nextValue 
												}) 
											}
										/>
										<InputControl
											label={__('Password', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_password }
											disabled={ this.state.isAPISaving }
											type="password"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_password: nextValue 
												}) 
											}
										/>
										<SelectControl
											label={ __( 'SMTP Secure:', 'webkompanen' ) }
											value={ this.state.webkompanen_phpmailer_smtp_secure } // e.g: value = [ 'a', 'c' ]
											onChange={ 
												( selectedValue ) => this.setState({
													webkompanen_phpmailer_smtp_secure: selectedValue
												}) 
											}
											options={ [
												{ value: null, label: __('', 'webkompanen') },
												{ value: 'tls', label: __('tls', 'webkompanen') },
												{ value: 'ssl', label: __('ssl', 'webkompanen') },
											] }
										/>
										<InputControl
											label={__('Sender email address', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_sender }
											disabled={ this.state.isAPISaving }
											type="email"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_sender: nextValue 
												}) 
											}
										/>	
										<InputControl
											label={__('Sender from email address', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_from }
											disabled={ this.state.isAPISaving }
											type="email"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_from: nextValue 
												}) 
											}
										/>
										<InputControl
											label={__('Sender from name', 'webkompanen')}
											labelPosition="top"
											value={ this.state.webkompanen_phpmailer_from_name }
											disabled={ this.state.isAPISaving }
											type="email"
											isPressEnterToChange
											onChange={ 
												( nextValue ) => this.setState({
													webkompanen_phpmailer_from_name: nextValue 
												}) 
											}
										/>
										<Spacer
											marginTop="5"
										>
											<ToggleControl
												label={ __( 'is HTML?', 'webkompanen' ) }
												help={ __( 'HTML Email', 'webkompanen' ) }
												checked={ this.state.webkompanen_phpmailer_is_html }
												disabled={ this.state.isAPISaving }
												onChange={ 
													() => this.changeOptions(
														'webkompanen_phpmailer_is_html', ! this.state.webkompanen_phpmailer_is_html 
													) 
												}
											/>
										</Spacer>
									</>
								}
								<Spacer
									marginTop="5"
								>
									<Button 
										isPrimary
										disabled={ this.state.isAPISaving }
										onClick={ 
											() => {
												this.changeOptions( 
													'webkompanen_phpmailer_host', this.state.webkompanen_phpmailer_host
												),
												this.changeOptions( 
													'webkompanen_phpmailer_port', Number(this.state.webkompanen_phpmailer_port)
												),
												this.changeOptions( 
													'webkompanen_phpmailer_username', this.state.webkompanen_phpmailer_username
												),
												this.changeOptions( 
													'webkompanen_phpmailer_password', this.state.webkompanen_phpmailer_password
												),
												this.changeOptions( 
													'webkompanen_phpmailer_smtp_secure', this.state.webkompanen_phpmailer_smtp_secure
												),
												this.changeOptions( 
													'webkompanen_phpmailer_sender', this.state.webkompanen_phpmailer_sender
												),
												this.changeOptions( 
													'webkompanen_phpmailer_from', this.state.webkompanen_phpmailer_from
												),
												this.changeOptions( 
													'webkompanen_phpmailer_from_name', this.state.webkompanen_phpmailer_from_name
												),
												this.changeOptions( 
													'webkompanen_app_auth', this.state.webkompanen_app_auth
												)
											}
										}
									>
										Opslaan
									</Button>
								</Spacer>
							</PanelBody>
						)
					}
				</TabPanel>
			</>
		)
	}
}

document.getElementById( 'webkompanen-single-site-settings-callback' ) ? 
render(
	<SingleSiteSettings/>,
	document.getElementById( 'webkompanen-single-site-settings-callback' )
):'';