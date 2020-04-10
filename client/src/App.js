import React from "react";
import "./styles.css";
import axios from "axios";
import Card from './components/Card'
import Navbar from './components/Navbar'
// import { ReqUsers } from "./components/ReqUsers";
// import { SearchForm } from "./components/SearchForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        // console.log(response.data); array of obj, with name,country, searches, id
        this.setState({data: response.data});
      })
      .catch(err => console.error(err));
  }

  render() {
    // console.log(this.state.data);
    console.log('rendering')
    return (
      
      <div className="App">
        <Navbar/>
        <h1>user data</h1>
        {
          this.state.data.map((item) => {return (<Card key={item.id} data={item} />)})
        }
      </div>
    );
  }
}

export default App;
