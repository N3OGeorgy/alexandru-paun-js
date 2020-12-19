// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import SkillItem from './SkillItem';
import axios from 'axios';

class App extends React.Component {
  baseUrl = 'http://localhost:8080/persons';
  state = {
    nameInputValue: '',
    skillInputValue: 'demo',
    skills: [],
    persons: [],
  };

  onSkillChange = (event) => {
    let value = event.target.value;
    this.setState({
      skillInputValue: value,
    });
  };

  onNameChange = (event) => {
    this.setState({
      nameInputValue: event.target.value,
    });
  };

  renderSkillList() {
    if (this.state.skills.length < 1) {
      return null;
    }

    const skillItems = this.state.skills.map((skill, i) => {
      return <SkillItem label={skill} key={skill + i}></SkillItem>;
    });

    return <ul>{skillItems}</ul>;
  }

  addSkill = () => {
    if (this.state.skillInputValue.length < 1) {
      return;
    }

    this.setState({
      skills: [...this.state.skills, this.state.skillInputValue],
      skillInputValue: '',
    });
  };

  buildPersonList = () => {
    axios.get(this.baseUrl).then((axiosResult) => {
      this.setState({
        persons: axiosResult.data.persons,
      });
    });
  };

  componentDidMount() {
    this.buildPersonList();
  }

  onSubmitForm = (event) => {
    event.preventDefault();

    const requestBody = {
      person: {
        name: this.state.nameInputValue,
        skills: this.state.skills,
      },
    };

    axios.post(this.baseUrl, requestBody).then(() => {
      this.setState({
        skills: [],
        nameInputValue: '',
        skillInputValue: '',
      });

      this.buildPersonList();
    });
  };

  render() {
    return (
      <div className="container mt-2">
        <h1>Persons form</h1>

        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.nameInputValue}
                onChange={this.onNameChange}
              ></input>
            </div>
          </fieldset>

          <fieldset>
            <div>
              <input
                type="text"
                name="skill"
                placeholder="Skill"
                value={this.state.skillInputValue}
                onChange={this.onSkillChange}
              ></input>
              <button type="button" onClick={this.addSkill}>
                Add Skill
              </button>
            </div>
            {this.renderSkillList()}
          </fieldset>
          <fieldset>
            <button type="submit">Send</button>
          </fieldset>
        </form>

        <ul>
          {this.state.persons.map((person) => {
            return (
              <li>
                {person.name}
                <ul>
                  {person.skills.map((skill, i) => {
                    return <li key={skill + i}>{skill}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
