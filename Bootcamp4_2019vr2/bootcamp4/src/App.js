import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveP from './components/RemoveBuilding';
import AddP from './components/AddBuilding';
import '../src/App.css'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //create an object with this filter with a default
      filterText: '',
      buildingListA: this.props.data,
      selectedBuilding: 0,

    };
    // this.handleInputChange = this.handleInputChange(this)
  }

  removeEntry = () => {
    const newList = this.state.buildingListA.filter((building) => { return building.id !== this.state.selectedBuilding });
    this.setState({
      buildingListA: newList
    })
  }

  removeEntry2(val){
    //console.log("I am superman")
    //console.log("this is val: ",val)
    //console.log(this.state.buildingListA)
    this.setState({
      buildingListA: val
    })
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
    //value pass will be assigned on filtertext.
    //value comes from Search.js
    //now pass value as a prop
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  Onsubmit2(val)
  {
    // console.log("I have submit")
    this.setState({
      //buildingListA: val
      buildingListA: val
    })
  }



  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div>filtertext is: {this.state.filterText}</div>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.buildingListA}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>



            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                currentdata={this.state.buildingListA}
                data={this.state.buildingListA}
                removeEntryS = {this.removeEntry2.bind(this)}
              />
            </div>

            <div className="column2.5"></div>

            <AddP 
            currentdata={this.state.buildingListA}
            OnsubmitS = {this.Onsubmit2.bind(this)}
            />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
