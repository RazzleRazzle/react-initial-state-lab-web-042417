import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var bombOff = null
    if (this.state.secondsLeft === 0) {
      bombOff = "Boom!"
    } else {
      bombOff = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return(
    <div className="bomb">
      { bombOff }
    </div>
    )
  }


}
