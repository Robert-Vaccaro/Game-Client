import React from 'react';
import MainTable from "./components/Table/MainTable.js"
import Heading from "./components/Heading/Heading.js"
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
}
componentDidMount() {
  fetch("https://shrouded-reef-01664.herokuapp.com/testapi")
  .then((res) => res.json())
  .then(res => this.setState({apiResponse:res}))
}

  render(){
    return(
      <div>
        <Heading />
        <MainTable apiRes={this.state.apiResponse}/>
      </div>
    );
  }
}

export default App;