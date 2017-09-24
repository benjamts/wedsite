import styles from '../styles/rsvp-form.css';

import React from 'react'

function updateField(e) {
  this.setState({ [e.target.name]: e.target.value });
}

export default class AttendeeRSVPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attending: null,
      meal: '',
      additionalNotes: '',
    };

    this.updateField = updateField.bind(this);
  }

  useAjax(e) {
    e.preventDefault();
  }

  get isAttending() {
    return this.state.attending === 'true';
  }

  get isNotAttending() {
    return this.state.attending === 'false';
  }

  renderAdditionalNotesInput() {
    return (
      <fieldset>
        <label
          htmlFor="additionalNotesInput"
        >Anything else we should know?</label>
        <textarea
          id="additionalNotesInput"
          onChange={this.updateField}
          placeholder="Food allergies, etc."
        ></textarea>
      </fieldset>
    );
  }

  renderAttendingInput() {
    return (
      <fieldset>
        <label>Will you be attending?</label>
        <label>
          Yes
          <input
            checked={this.isAttending}
            name="attending"
            onChange={this.updateField}
            type="radio"
            value="true"
          />
        </label>
        <label>
          No
          <input
            checked={this.isNotAttending}
            name="attending"
            onChange={this.updateField}
            type="radio"
            value="false"
          />
        </label>
      </fieldset>
    );
  }

  renderNameInput() {
    return (
      <fieldset>
        <label
          htmlFor="nameInput"
        >Name</label>
        <input
          id="nameInput"
          name="name"
          onChange={this.updateField}
          placeholder="e.g. Barney Stinson"
          type="text"
          value={this.state.name}
        />
      </fieldset>
    );
  }

  renderMealPreferenceInput() {
    return (
      <fieldset>
        <label
          htmlFor="mealInput"
        >Meal Preference</label>
        <select
          id="mealInput"
          name="meal"
          onChange={this.updateField}
          value={this.state.meal}
        >
          <option>--</option>
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="fish">Fish</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
      </fieldset>
    );
  }

  render() {
    return (
      <form onSubmit={this.useAjax}>
        {this.renderNameInput()}
        {this.renderAttendingInput()}
        {this.isAttending ? this.renderMealPreferenceInput() : null}
        {this.isAttending ? this.renderAdditionalNotesInput() : null}
      </form>
    );
  }
}