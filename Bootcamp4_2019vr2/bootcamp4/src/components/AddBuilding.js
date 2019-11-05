import React from 'react';

class Add extends React.Component {
constructor(props)
{
    super(props);
    this.state={
    newValueC: '',
    newValueN: '',
    newValueLa: '',
    newValueLo: '',
    newValueA: ''
    }
}

	onchange(value)
		{
		  var valC = value.target.value;
          //console.log("I am obtaining a code: ", valC)
          this.setState({newValueC: valC})
          //console.log("I am obtaining a name: ", this.state.newValueN)
     
		}

	onchangeN(val)
        {
            var valN = val.target.value; 
            this.setState({newValueN: valN})
            //console.log("I am obtaining a name: ", this.state.newValueN)
        }
    
    onchangeLa(val)
    {
        var valLa = val.target.value;
        this.setState({newValueLa: valLa})
        //console.log("I am obtaining a la: ", this.state.newValueLa)
        //console.log("I am obtaining a lo: ", this.state.newValueLo)
    }

    onchangeLo(val)
    {
        var valLo = val.target.value;
        this.setState({newValueLo: valLo})
        //console.log("I am obtaining a la: ", this.state.newValueLa)
        //console.log("I am obtaining a lo: ", this.state.newValueLo)
    }

    onchangeA(val)
    {
        var valA = val.target.value;
        this.setState({newValueA: valA})
        //sole.log("I am obtaining a Address: ", this.state.newValueA)
    }

    
    
  
	

render() {

    const { currentdata, OnsubmitS } = this.props;
    var {newValueC, newValueN, newValueLa, newValueLo, newValueA} = this.state;

    function PreOnsubmit()
    {
    // console.log( currentdata)
    // console.log("size " ,currentdata.length)
       if (newValueC!== '' && newValueN!== '') 
        {

            console.log("this mean to be my new id: ",currentdata[currentdata.length - 1].id);
            if (newValueLo!== '' && newValueLa!== ''  && newValueA !== '')
            { 
                var newData={
                    // newData.id = this.state.buildingListA.length +1,
                    id: currentdata[currentdata.length - 1].id +1,
            
                    code: newValueC,
                    name: newValueN,
            
            
                    coordinates:
                    {
                        latitude: newValueLa,
                        longitude: newValueLo,
                    },

                    address: newValueA,
                }
            }
            else if (newValueLo!== '' && newValueLa!== '') 
            {
                var newData={
                    // newData.id = this.state.buildingListA.length +1,
                    id: currentdata[currentdata.length - 1].id +1,
                    
                    code: newValueC,
                    name: newValueN,
                    
                    
                    coordinates:
                    {
                        latitude: newValueLa,
                        longitude: newValueLo,
                    },
                }
            }
            else if (newValueA !== '') 
                {
                var newData={
                    // newData.id = this.state.buildingListA.length +1,
                    id: currentdata[currentdata.length - 1].id +1,
                    code: newValueC,
                    name: newValueN,
                    address: newValueA
                }
                }
            else
            {
                var newData={
                    //newData.id = this.state.buildingListA.length +1,
                  id: currentdata[currentdata.length - 1].id +1,
                    
                    code: newValueC,
                    name: newValueN,
                }
            }            
        //console.log("this is new data", newData)
           
        const newList = currentdata    
        newList.push(newData)
    //OnsubmitS(newList)
        //console.log(newList)
        OnsubmitS(newList)
        
            
    }
}
		
		return (
			
			<div className="column3">
            <form >
			<div className="option3">Code: </div>
				<input type="text"  name="code" placeholder="code" value={this.state.code}
							ref={(value) => {this.myValue = value}}
                            onChange= {this.onchange.bind(this)} 
                            className="dialog"/>
				<div className="option3">Name: </div>
                <input type="text" name="acronym" placeholder="name" value={this.state.acronym}
                            ref={ (valueN) => {this.myValue = valueN}}
                            onChange= {this.onchangeN.bind(this)} 
                            className="dialog"/>
                <div className= "option3">Coordinates: </div>
                <ul>
                  <li>Latitud: <input type="text" name="atitud" placeholder="55.5" value={this.state.latitud}
                            ref={ (valueLa) => {this.myValue = valueLa}}
                            onChange= {this.onchangeLa.bind(this)}
                            className="dialog2"/></li>
                  <li>Longitud:  <input type="text" name="longitud" placeholder="77.7" value={this.state.longitud} 
                            ref={ (valueLo) => {this.myValue = valueLo}}
                            onChange= {this.onchangeLo.bind(this)}
                            className="dialog2"/></li>
                </ul> 
                <div className="option3">Address: </div>
                <input type="text" name="adress" placeholder="Manhattan Atlanta" value={this.state.adress}
                            ref={ (valueA) => {this.myValue = valueA}}
                            onChange= {this.onchangeA.bind(this)}
                            className="dialog"/>
				<button type="button" className="button_to_add "
                		onClick={PreOnsubmit}> Add </button> 
                <input type="reset" className="resetA"/>
              </form>
            </div>
		);
	}
}
export default Add;








{/* 
             
                // <div ClassName="option3">Address: </div>
                // <input type="text" name="adress" placeholder="Manhattan Atlanta" value={this.state.adress}
                //             ref={ (valueA) => {this.myValue = valueA}}
                //             onChange= {this.onchangeA.bind(this)}
                //               className="dialog"/>
                         
//                 {/* 
                
//                  */}
//                 {/* <input type="submit" className="button_to_add " /> */}
                // <button type="button" className="button_to_add "
                // onClick={this.Onsubmit.bind(this)}> Add </button> 
                // <input type="reset" ClassName="resetA"/>












