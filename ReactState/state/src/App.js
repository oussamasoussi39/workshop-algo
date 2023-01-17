import React, { Component } from 'react';
import image from './CHADLI.jpg';

class App extends Component {
  state = {
    Person: {
      fullName: 'Oussama soussi',
      bio: 'A web developer from Tunisia.',
      imgSrc: image,
      profession: 'Web Developer'
    },
    shows: false,
    timeSinceMount: 0
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows
    });
  }

  componentDidMount() {
     setInterval(() => {
      console.log("object");
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
     
    }, 1000);
  }

  render() {
    console.log("render");

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {(this.state.shows) ? (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} />
            <p>Profession: {this.state.Person.profession}</p>
            <p>Time Interval: {this.state.timeSinceMount}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;