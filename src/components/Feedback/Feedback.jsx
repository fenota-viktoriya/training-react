import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const name = e.currentTarget.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => {
      let total;
      total = a + b;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>
        <div>
          <button
            type="button"
            name="good"
            onClick={event => {
              this.changeState(event);
            }}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={event => {
              this.changeState(event);
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            onClick={event => {
              this.changeState(event);
            }}
          >
            Bad
          </button>
        </div>
        <div>
          <h2>Статистика</h2>
          <p> Goog:{this.state.good}</p>
          <p> Neutral: {this.state.neutral}</p>
          <p> Bad:{this.state.bad} </p>
          <p> Total:{this.countTotalFeedback()}</p>
          <p>Positive : {this.countPositiveFeedbackPercentage()} %</p>
        </div>
      </section>
    );
  }
}
