import * as XLSX from 'xlsx/xlsx';
import { saveAs } from 'file-saver';

import apiFetch from '@wordpress/api-fetch';

import { 
	__experimentalInputControl as InputControl,
	__experimentalSpacer as Spacer,
    __experimentalHeading as Heading,
    __experimentalView as View,
	 __experimentalGrid as Grid,
    __experimentalText as Text
} from '@wordpress/components';

import initAdmin from '../../utils/init-admin';
import PageSearch from '../../utilities/pagelist';

const { __ } = wp.i18n;
const {
	BaseControl,
	Button,
	ExternalLink,
	Panel,
	Modal,
	PanelBody,
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
	Icon,
	SelectControl
} = wp.components;
const GoogleFontsList = []
const {
	render,
	Component,
	Fragment,
	useState
} = wp.element;

const {
	subscribe,
	select,
	dispatch,
} = wp.data;


const {
	getQueryArg
} = wp.url;

//const apiFetch = wp.apiFetch; 


class AppBatchImport extends Component {
    constructor() {
		super( ...arguments);
		
		global.__AppBatchImport = this

		this.sendInvitation = this.sendInvitation.bind( this )

        this.changeOptions = this.changeOptions.bind( this );

		this.dataHandeler = this.dataHandeler.bind( this );
		
		this.batchImport = this.batchImport.bind( this );
		
		this.getOptions = this.getOptions.bind( this );
		
		this.databaseInsert = this.databaseInsert.bind( this );
		
		this.s2ab = this.s2ab.bind( this );
		
		this.padTo2Digits = this.padTo2Digits.bind( this );
		
		this.formatDate = this.formatDate.bind( this );
		
		var _this = this

        var options = [
            { item:0, option: false, name: 'company', displayname: 'Bedrijf' },
            { item:1, option: false, name: 'firstname', displayname: 'Voornaam' },
            { item:2, option: false, name: 'lastname', displayname: 'Achternaam' },
            { item:3, option: false, name: 'email', displayname: 'E-mail' }
        ]
    
        var sortedoptions = options.sort((a, b) => {
           return a.displayname > b.displayname ? 1 : -1
        });

		this.state = {
			isAPILoaded: false,
			isAPISaving: false,
			hasDropped: false,
			isopen: false,
			toggleed: false,
			amountoption: true,
			productoption: true,
			deliveryoption: true,
			deliveryamountoption: true,
			qtyoption: true,
			nameoption: true,
			companyoption: true,
			addressoption: true,
			zipcodeoption: true,
			placeoption: true,
			phonenumberoption: true,
			emailaddressoption: true,
			messageoption: true,
			deliverymessageoption: true,
			showmeoption: true,
			termsandconditionsoption: true,
			paymentstatusoption: true,
			orderdateoption: true,
			databasedata: [],
			importdata: [],
			importheaders: [],
			headeroptions:(
				<div>
					Upload csv, xlsx, xls bestand
				</div>
			),
			modaltext: '',
			projecttoken: getQueryArg(''+window.location.href+'', 'projecttoken'),
			donors:(
					<div>
						<ul>
							<li>Geen donateurs voor dit project</li>
						</ul>
					</div>
			),
			options: sortedoptions,
			fileinfo:(
				<></>
			),
			imported:(
				<></>
			)
		};
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

	s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
       	for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    	return buf;
                
    }

    getOptions(item){
		var output = [];
		var _this = this;
		for(var k=0; k < _this.state.options.length; k++){
			output.push(
				<option
					data-item={ k }
					data-option={ _this.state.options[k].name }
					data-column={ item }
				>
					{ _this.state.options[k].displayname }
				</option>
			)
			if(k === _this.state.options.length-1){
				return output;
			}
		}
												
	}

    padTo2Digits(num) {
		var _this = this;
		
  		return num.toString().padStart(2, '0');
	}

	formatDate(date) {
		var _this = this;
		
  		return ([
      		date.getFullYear(),
      		_this.padTo2Digits(date.getMonth() + 1),
      		_this.padTo2Digits(date.getDate()),
    	].join('-') +
    	' ' +
    	[
      		_this.padTo2Digits(date.getHours()),
      		_this.padTo2Digits(date.getMinutes()),
      		_this.padTo2Digits(date.getSeconds()),
    	].join(':'));
	}
	sendInvitation(request_first_name, request_last_name, request_email){
		fetch('https://ardosz.gaatbinnenkortonline.nl/wp-json/share/v1/new/',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': 'Basic '+window.btoa('bram_j21vs7eb:Uj7B ZmiJ GIf0 DiJ4 OOpU uWcu')+'',
				//'Authorization': 'Basic '+window.btoa('BKnapen:huZZ 0d5i wZQe HxCx P7EN GGyM')+'',
			},
			body: JSON.stringify({
				first_name:''+request_first_name+'',
				last_name:''+request_last_name+'',
				email:''+request_email+'',
				post_id: global.__SelectedPage,
				user_id:'1',
			})
		})
  		.then(
			(response) => {
				console.log(response)
				return response.json()
			}
		)
  		.then(
			(data) => {
				console.log(data)
			}
		)
		.catch(
			(error) => {
    			console.error('Error:', error);
			}
		);
		/*const url = '/share/v1/new/';
        apiFetch( 
			{ 
				path: url,
				method: 'POST',
				headers:{
					'Content-Type': 'application/json',
					'Authorization': 'Basic '+window.btoa('bram_j21vs7eb:Uj7B ZmiJ GIf0 DiJ4 OOpU uWcu')+'',
					//'Authorization': 'Basic '+window.btoa('BKnapen:huZZ 0d5i wZQe HxCx P7EN GGyM')+'',
				},
				data: { 
					first_name:'Bram',
					last_name:'Knapen',
					email:'bramknapen@outlook.com',
					post_id:'1',
					user_id:'1',
				}
			}
		)
		.then(  
			(response) => {
				console.log(response)
				return response.json()
			}
		)
		.then(
		  	(data) => {
			  	console.log(data)
			}
	  	)
		.catch(
			(error) => {
				console.error('Error:', error);
			}
		)*/
	}


    dataHandeler() {
		var _this = this;
		var output = []
		var importedoutput = []
		for(var i=0; i < _this.state.importdata.length;){
			var item = [];
			item['bedrijf'] = _this.state.importdata[i][0]
			item['voornaam'] = _this.state.importdata[i][1]
			item['achternaam'] = _this.state.importdata[i][2]
			item['email'] = _this.state.importdata[i][3]
			output.push(
				item
			)
			i == 0 ?
			'' :(
				importedoutput.push(
					<tr>
						<td>
							{ i }
						</td>
						<td>
							{ _this.state.importdata[i][0] }
						</td>
						<td>
							{ _this.state.importdata[i][1] }
						</td>
						<td>
							{ _this.state.importdata[i][2] }
						</td>
						<td>
							{ _this.state.importdata[i][3] }
						</td>
					</tr>
				),
				_this.sendInvitation(_this.state.importdata[i][1], _this.state.importdata[i][2], _this.state.importdata[i][3])
			)

			i++;
			/*for(var j=0; j < _this.state.options.length; j++){
				
					
				item[''+_this.state.options[j].name+''] = _this.state.importdata[i][Number(_this.state.options[j].option)]
				
				
				if(j === _this.state.options.length-1){
					output.push(
						item
					)
					
					i++
				}
			}*/
			if(i === _this.state.importdata.length - 1){
				_this.setState({
					imported:(
						<table
							className='table table-striped'
						>
							<thead>
    							<tr>
      								<th scope="col">#</th>
      								<th scope="col">Bedrijf</th>
      								<th scope="col">Voornaam</th>
      								<th scope="col">Achternaam</th>
      								<th scope="col">E-mail</th>
    							</tr>
  							</thead>
							<tbody>
								{ importedoutput }
							</tbody>
						</table>
					),
					headeroptions:(
						<div>
							<p>Gegevens zijn verwerkt.</p>
						</div>
					),
					databasedata: output
				}, ()=>{
					for(var i=0; i < _this.state.databasedata.length; i++){
						//i === 0	? '' : _this.databaseInsert(_this.state.databasedata[i], i)
						console.log(_this.state.databasedata[i])
					}
				})
			}
		}
	}

    databaseInsert(reqData, reqItem) {
		var _this = this;
		apiFetch( {
    		path: 'boostyourclub/v1/importdata',
    		method: 'POST',
			data: {
				amount: reqData.amount,
				description: reqData.product,
				delivery: reqData.delivery,
				shippingcosts: reqData.deliveryamount,
				qty: reqData.qty,
				name: reqData.name,
				company: reqData.company,
				address: reqData.address,
				zipcode: reqData.zipcode,
				place: reqData.place,
				phonenumber: reqData.phonenumber,
				emailaddress: reqData.emailaddress,
				message: reqData.message,
				deliverymessage: reqData.deliverymessage,
				showme: reqData.showme,
				generalcondition: reqData.termsandconditions,
				paymentstatus: reqData.paymentstatus,
				orderdate: _this.formatDate(reqData.orderdate),
				projecttoken: _this.state.projecttoken,
			}
		} ).then( ( res ) => {
			console.log(reqItem)
			if(res.success){
				console.log(res)
			}
			if(!(res.success)){
				console.log(res)
			}
			console.log(reqItem)
		}).catch( err => {
			console.log(reqItem)
			console.log(err)
		})
	}

    batchImport(e) { 
		var _this = this;
		var exceljsonObj = [];
        var files = e;
        var i, f;
		var filenames = [];
        for (i = 0, f = files[i]; i != files.length; ++i) {
            var reader = new FileReader();
            var name = f.name;

			filenames.push(
				<p>
					{ name }
				</p>
			)

			if(i == files.length - 1){
				_this.setState({
					fileinfo:(
						<div>
							{ filenames }
						</div>
					)
				})
			}

            reader.onload = function (e) {
                var data = e.target.result;
                var result;
                var workbook = XLSX.read(data, { type: 'binary', cellText:false, cellDates:true });
                var sheet_name_list = workbook.SheetNames;
                sheet_name_list.forEach(function (y) { /* iterate through sheets */
                    //var exceljsonObj = [];
					//https://github.com/SheetJS/sheetjs#json
					let ws = workbook.Sheets[y];
					//raw:false ws['!ref'] = "A1:Z1" // change the sheet range to A2:C3 dateNF: 'yyyy-mm-dd HH:mm:ss' https://github.com/SheetJS/sheetjs/issues/1052 dateNF: 'dd"."mm"."yyyy',
					var sheetdata  =  XLSX.utils.sheet_to_json(ws, {header:1, dateNF: 'yyyy-mm-dd HH:mm:ss'});
					_this.setState(
						{importdata: sheetdata},
						()=>{
							_this.setState({
								importheaders: _this.state.importdata[0]
							},
							()=>{
								var output = []
								var companyvailid = false
								var firstnamevailid = false
								var surnamevailid = false
								var emailvailid = false
								for(var j=0; j < _this.state.importheaders.length; j++){
									console.log(_this.state.importheaders[j])
									if(j == 0){
										companyvailid = _this.state.importheaders[j] == 'bedrijf' ? true : false
									}
									if(j == 1){
										firstnamevailid = _this.state.importheaders[j] == 'voornaam' ? true : false
									}
									if(j == 2){
										surnamevailid = _this.state.importheaders[j] == 'achternaam' ? true : false
									}
									if(j == 3){
										emailvailid = _this.state.importheaders[j] == 'email' ? true : false
									}
									output.push(
										<div>
											<label
												style={
													{ marginBottom: "5px", display: "block" }
												}
												for={ _this.state.importheaders }
											>
												{ _this.state.importheaders[j] }
											</label>
											<select
												style={
													{ width: "100%", marginBottom: "5px" }
												}
												title={ _this.state.importheaders[j] }
												id={ _this.state.importheaders[j] }
												onChange={ 
													(e)=>{
														// 1. Make a shallow copy of the items
    													var items = [..._this.state.options];
    													// 2. Make a shallow copy of the item you want to mutate
    													var item = {...items[Number(e.target.querySelector(':checked').getAttribute('data-item'))]};
    													// 3. Replace the property you're intested in
    													item.option = Number(e.target.querySelector(':checked').getAttribute('data-column'));
														// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    													items[Number(e.target.querySelector(':checked').getAttribute('data-item'))] = item;
														// 5. Set the state to our new copy
    													_this.setState({
															options: items
														},
															() => {
																console.log( _this.state.options )
															}
														);
													}
												}
											>
												<option
													data-option=""
												>
												</option>
												{ _this.getOptions(j) }
											</select>
										</div>
									)
									if(j === _this.state.importheaders.length - 1){
										if(companyvailid & firstnamevailid & surnamevailid & emailvailid ){	
											_this.setState({
												headeroptions:(
													<div>
														<div
															style={
																{ width: "100%", marginBottom:"20px" }
															}
														>
															<p>Bestand voldoet aan de juiste gegevens.</p>
															<p>Selecteer uit onderstaande lijst voor welke trainingen je een uitnodiging wilt versturen.</p>
														</div>
														<PageSearch/>
														<Button 
															isPrimary 
															onClick={ ()=>{
																_this.dataHandeler()
																console.log('global.__SelectedPage')
																console.log(global.__SelectedPage)
															} }
															//style={{ width: "100%" }}
															className="btn mt-3"
														>
															Verwerk gegevens
														</Button>
													</div>
												)
											})
										}
										else{
											_this.setState({
												headeroptions:(
													<div>
														<p>Bestand voldoet niet aan de juiste gegevens.</p>
													</div>
												)
											})
										}
									}
								}
							}
							)
						}
					)
					
                	/*var rowObject  =  XLSX.utils.sheet_to_row_object_array(workbook.Sheets[y]);
					
					console.log(rowObject);
					
                    exceljsonObj = rowObject;
                    for(var i=0;i<exceljsonObj.length;i++){
                    	//var recordcount = exceljsonObj.length;
                    	var data = exceljsonObj[i];
						console.log(data)
                    }*/
                });
            };
            
			reader.readAsArrayBuffer(f);
        }
	}
    render(){
        //dispatch( 'core/editor' ).lockPostSaving( 'requiredValueLock' )
        /*if ( ! this.state.isAPILoaded ) {
            return (
                <Placeholder>
                    <Spinner/>
                </Placeholder>
            );
        }*/
    
        return (
            <Fragment>
                {
                    this.state.isopen && (
                        <Modal
                            focusOnMount //focus on the first element in the modal
                            shouldCloseOnEsc
                            shouldCloseOnClickOutside
                            overlayClassName="my-extra-modal-overlay-class"
                            title="Melding"
                            onRequestClose={ e => this.setState({isopen : false}) }
                        >
                            <p>{this.state.modaltext}</p>
                            <Button 
                                isSecondary 
                                onClick={ e => this.setState({isopen : false} ) }
                            >
                                Sluit venster
                            </Button>
                        </Modal>
                    )
                }
                <div className="components-panel__header">
                    <h2>
						<i class="fa-solid fa-file-import fa-bounce"></i> Batch import
                    </h2>
                </div>
                <PanelBody 
                    title={ __( 'Gebruikers importeren' ) } 
                    initialOpen={ false }
                    onToggle={ 
                        ( e ) => {
                            e === true ? ( this.setState( { toggleed: true } ) ) : ( this.setState( { toggleed: false } ) )
                        }
                    }
                >
                    <PanelRow className='headerimage-upload'>
                        <div style={{ width: "100%" }}>
                            <Spacer
                                marginBottom={5}
                            >
                                <FormFileUpload
                                    accept=".xlsx, .xls, .csv"
                                    onChange={ 
                                        ( event ) => {
                                            this.batchImport(event.target.files)
                                        }
                                    }
                                    render={ 
                                        ( { openFileDialog } ) => (
                                            <div>
                                                <p>Upload csv, xlsx, xls bestand: </p>
                                                <Button 
                                                    isSecondary 
                                                    onClick={ openFileDialog }
                                                >
                                                    Upload csv, xlsx, xls bestand
                                                </Button>
												{ this.state.fileinfo }
                                            </div>
                                        )
                                    }
                                >
                                </FormFileUpload>
                            </Spacer>
                            <Spacer
                                marginBottom={5}
                            >
                                    <div style={{ backgroundColor: "#e7e7e7", padding: "56px 64px", position: "relative", textAlign: "center"}}>
                                        { this.state.hasDropped ? 'Bestand geupload!' : 'Upload csv, xlsx, xls bestand, door het hier in te slepen' }
                                        <DropZone 
                                            //onFilesDrop={ (files, position) => this.setState( { hasDropped: true } ) }
                                            onFilesDrop={ 
                                                ( files, position ) => { 
													this.setState( { hasDropped: true } );
                                                    this.batchImport( files ); 
                                                }
                                            }
                                            onHTMLDrop={ 
                                                ( files, position ) => { 
                                                    this.batchImport( files ); 
                                                } 
                                            }
                                            onDrop={ 
                                                ( files, position ) => { 
                                                    this.batchImport( files ); 
                                                } 
                                            }
                                        />
                                    </div>
                            </Spacer>
                            <Spacer
                                marginBottom={5}
                            >
                                <div>
                                    { this.state.headeroptions }
									{ this.state.imported }
                                </div>
                            </Spacer>
                        </div>
                    </PanelRow>
                </PanelBody>
            </Fragment>
        );
    }
}
//export const init = () => initBlock( { name, metadata, settings } );
const name = 'batch-import';

export const init = () => initAdmin({
	name
})

export default AppBatchImport;
