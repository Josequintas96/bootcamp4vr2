import React from 'react';

import RemoveP from './RemoveBuilding'


class ViewBuilding extends React.Component {

	render() {
		var {data, selectedBuilding, currentdata, removeEntryS } = this.props;
		
		// function removeEntry0()
		// // { 
		// // 	console.log("hello")
		// // 	 removeEntryS
		// // 	 return
		// // }


		const selectBuilding2 = data.filter(name=>{
			//now we are filtering, we set the condition
			return name.id===selectedBuilding
		})
		.map(directory => {
			return (
				<div name = "selectBuilding">
					<div> {console.log(currentdata)} </div>
				<ul>
					<li> <strong>Code: </strong> {directory.code} </li>
					<li><strong>Name: </strong>  {directory.name} </li>
					{directory.coordinates && <li> <strong>Latitud:</strong> {directory.coordinates.latitude}</li>} 
					{directory.coordinates && <li> <strong>Longitud: </strong> {directory.coordinates.longitude} </li>} 
					{directory.address && <li> <strong>Address: </strong> {directory.address} </li>} 
				</ul>
				{/* <button type="button" 
				onClick={removeEntry0}
				> remove </button> */}
				<RemoveP 
					newData = {currentdata}
					selectedBuilding = {selectedBuilding}
					removeEntrySS = {this.props.removeEntryS}
				/>
				</div>
			);
		});

			
			
		return <div>{selectBuilding2}</div>;
	}
}
export default ViewBuilding;


function doesclick() {
	
	  console.log('The link was clicked.');
	
}


{/*  */}