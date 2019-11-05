import React from 'react';

class BuilingList extends React.Component {
	render() {
		
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data.filter(name=>{
			//now we are filtering, we set the condition
			return name.name.toLowerCase().indexOf(filterText.toLowerCase())>=0
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td className="codeT" >{directory.code} </td>
					<td onClick = {() => selectedUpdate(directory.id)} className="nameT">
						 {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
