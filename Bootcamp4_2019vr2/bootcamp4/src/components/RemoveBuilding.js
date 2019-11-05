import React from 'react';

class Remove extends React.Component {

	
	render() {
		var {newData, selectedBuilding, removeEntrySS} = this.props;

		
		function removeEntryOmega(){
			console.log("hello")
			console.log(newData)
			const newList = newData.filter((building) => { return building.id !== selectedBuilding });
			console.log(newList)
			return newList
		  }
		 function OnClick(event)
		  {
			var ulList = removeEntryOmega();
			console.log(ulList)
			removeEntrySS(ulList);
		}

		  

		return (
			<button type="button" className="button_to_remove "
				onClick={OnClick}
					> remove </button>
		);
	}
}
export default Remove;


// function(e){
// 	console.log(newData);
// 	console.log(selectedBuilding)}
  

// this.removeEntry

