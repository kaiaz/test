import React from 'react';

  class Game extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            isChecked: true,
            isEdit: false
         }
    }


    handleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
        alert(this.state.isChecked)
    };

    checkControl = () => {
        return this.state.isChecked ? 'Выбран' : 'Не выбран'
    };

    edit = () => {
        this.setState({
           isEdit: true
        })
    };

    save = () => {
        this.setState({
            isEdit: false
        })
    };

    remove = () => {
      alert("this remove");
    };

    render() {
        return(
          <div>
              <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.isChecked}/>
              <p>Чекбокс {this.checkControl()}</p>
              <h1>{this.props.name}</h1>
              <h2>{this.props.age}</h2>
              <p>{this.props.task}</p>
              <button onClick={this.edit}>Редактировать</button>
              <button onClick={this.remove}>Удалить</button>
          </div>
        );
    }
}

export default Game;