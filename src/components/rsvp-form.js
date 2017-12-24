import styles from '../styles/rsvp-form.css'

import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'

import range from '../utils/range'

const ATTENDEE_FIELDS = {
  IsAttending: '',
  Name: ''
}
const MAX_ATTENDEES = 4
const InputPropTypes = {
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

class AdditionalNotes extends React.PureComponent {
  render () {
    const id = `${this.props.name}Input`
    return (
      <div className={styles.formFieldset}>
        <textarea
          className={styles.textareaInput}
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder='Food allergies, etc.'
          value={this.props.value}
         />
        <label
          className={styles.inputLabel}
          htmlFor={id}
        >Anything else we should know?</label>
        <p className={styles.inputError}>{this.props.error}</p>
      </div>
    )
  }
}
AdditionalNotes.propTypes = InputPropTypes

class IsAttending extends React.PureComponent {
  render () {
    const id = `${this.props.name}Input`
    return (
      <div className={styles.formFieldset}>
        {/* https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers */}
        <div className={styles.flexbugWrapper}>
          <input
            checked={this.props.value === 'true'}
            className={styles.radioInput}
            id={`${id}True`}
            name={this.props.name}
            onChange={this.props.onChange}
            type='radio'
            required
            value='true'
          />
          <label
            className={styles.radioInputLabel}
            htmlFor={`${id}True`}
          >Yes</label>

          <input
            checked={this.props.value === 'false'}
            className={styles.radioInput}
            id={`${id}False`}
            name={this.props.name}
            onChange={this.props.onChange}
            type='radio'
            required
            value='false'
          />
          <label
            className={styles.radioInputLabel}
            htmlFor={`${id}False`}
          >No</label>
          <legend
            className={styles.inputLabel}
          >Will this person be attending?</legend>
          <p className={styles.inputError}>{this.props.error}</p>
        </div>
      </div>
    )
  }
}
IsAttending.propTypes = InputPropTypes

class AttendeeName extends React.PureComponent {
  render () {
    const id = `${this.props.name}Input`
    return (
      <div className={styles.formFieldset}>
        <input
          className={styles.textInput}
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder='e.g. Barney Stinson'
          required
          type='text'
          value={this.props.value}
         />
        <label
          className={styles.inputLabel}
          htmlFor={id}
        >Name</label>
        <p className={styles.inputError}>{this.props.error}</p>
      </div>
    )
  }
}
AttendeeName.propTypes = InputPropTypes

class NumberOfAttendees extends React.PureComponent {
  render () {
    const id = `${this.props.name}Input`
    return (
      <div className={styles.formFieldset}>
        <select
          className={styles.selectInput}
          id={id}
          name={this.props.name}
          required
          onChange={this.props.onChange}
          value={this.props.value}
        >
          <option key='default'>--</option>
          {range(0, MAX_ATTENDEES).map(function (n) {
            return (
              <option
                key={n}
                value={`${n + 1}`}
              >{n + 1}</option>
            )
          })}
        </select>
        <label
          className={styles.inputLabel}
          htmlFor={id}
        >How many people are in your party?</label>
        <p className={styles.inputError}>{this.props.error}</p>
      </div>
    )
  }
}
NumberOfAttendees.propTypes = InputPropTypes

class InviteCode extends React.PureComponent {
  render () {
    const id = `${this.props.name}Input`
    return (
      <div className={styles.formFieldset}>
        <input
          className={styles.textInput}
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder='e.g. E45C7H'
          required
          type='text'
          value={this.props.value}
        />
        <label
          className={styles.inputLabel}
          htmlFor={id}
        >What's the code on your invitation?</label>
        <p className={styles.inputError}>{this.props.error}</p>
      </div>
    )
  }
}
InviteCode.propTypes = InputPropTypes

class AttendeeRSVPFields extends React.PureComponent {
  render () {
    return (
      <div className={styles.formFieldset}>
        <legend
          className={styles.fieldsetLegend}
        >Attendee {this.props.attendeeNumber + 1}</legend>
        <AttendeeName
          error={this.props.nameError}
          name={`attendee${this.props.attendeeNumber}Name`}
          onChange={this.props.onChange}
          value={this.props.name}
         />
        <IsAttending
          error={this.props.isAttendingError}
          name={`attendee${this.props.attendeeNumber}IsAttending`}
          onChange={this.props.onChange}
          value={this.props.isAttending}
         />
      </div>
    )
  }
}
AttendeeRSVPFields.propTypes = {
  attendeeNumber: PropTypes.number.isRequired,
  isAttending: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

class AttendeeRSVPForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isSubmitting: false,

      additionalNotes: '',
      additionalNotesError: '',
      inviteCode: '',
      inviteCodeError: '',
      numberOfAttendees: '',
      numberOfAttendeesError: ''
    }

    for (let i = 0; i < MAX_ATTENDEES; i++) {
      for (let fieldName in ATTENDEE_FIELDS) {
        this.state[`attendee${i}${fieldName}`] = ''
        this.state[`attendee${i}${fieldName}Error`] = ''
      }
    }

    this.onFieldChange = this.onFieldChange.bind(this)
    this.submitWithAjax = this.submitWithAjax.bind(this)
  }

  get errorFields () {
    return Object.keys(this.state)
           .filter(k => k.endsWith('Error'))
           .filter(k => !k.startsWith('inviteCode'))
           .filter(k => !k.startsWith('additionalNotes'))
  }

  get hasError () {
    return this.errorFields.reduce((hasError, fieldName) => {
      return hasError || this.state[fieldName] !== ''
    }, false)
  }

  get isMissingRequiredFields () {
    return this.requiredFields.reduce((isMissingRequiredField, fieldName) => {
      return isMissingRequiredField || this.state[fieldName] === ''
    }, false)
  }

  get requiredFields () {
    const requiredFields = [
      'inviteCode',
      'numberOfAttendees'
    ]
    for (let i = 0; i < this.state.numberOfAttendees || 0; i++) {
      requiredFields.push(`attendee${i}Name`)
      requiredFields.push(`attendee${i}IsAttending`)
    }
    return requiredFields
  }

  get shouldDisableSubmit () {
    return this.state.isSubmitting ||
           this.hasError ||
           this.isMissingRequiredFields
  }

  onFieldChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitWithAjax (e) {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    const numberOfAttendees = parseInt(this.state.numberOfAttendees, 10)
    window.fetch(`${API_HOST}/rsvp`, {  // eslint-disable-line no-undef
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inviteCode: this.state.inviteCode,
        numberOfAttendees: numberOfAttendees,
        attendees: range(0, numberOfAttendees).map((x, i) => {
          return {
            isAttending: this.state[`attendee${i}IsAttending`] === 'true',
            name: this.state[`attendee${i}Name`]
          }
        }),
        additionalNotes: this.state.additionalNotes
      })
    })
    .then(res => {
      this.setState({ isSubmitting: false })
      if (res.ok) {
        this.props.history.push('/thanks')
      } else {
        return Promise.reject(res)
      }
    })
    .catch(res => {
      if (res.status === 401) {
        return res.json()
        .then(err => {
          this.setState({ inviteCodeError: err.message })
          document.getElementById('inviteCodeInput').scrollIntoView({
            behavior: 'smooth'
          })
        })
      }
    })
  }

  render () {
    const numberOfAttendees = parseInt(this.state.numberOfAttendees, 10) || 0
    return (
      <form onSubmit={this.submitWithAjax}>
        <NumberOfAttendees
          error={this.state.numberOfAttendeesError}
          name='numberOfAttendees'
          onChange={this.onFieldChange}
          value={this.state.numberOfAttendees}
        />
        {range(0, numberOfAttendees).map((x, i) => {
          return (
            <AttendeeRSVPFields
              additionalNotes={this.state[`attendee${i}AdditionalNotes`]}
              additionalNotesError={this.state[`attendee${i}AdditionalNotesError`]}
              attendeeNumber={i}
              isAttending={this.state[`attendee${i}IsAttending`]}
              isAttendingError={this.state[`attendee${i}IsAttendingError`]}
              key={i}
              name={this.state[`attendee${i}Name`]}
              nameError={this.state[`attendee${i}NameError`]}
              onChange={this.onFieldChange}
            />
          )
        }, this)}
        <AdditionalNotes
          error={this.state.additionalNotesError}
          name={`additionalNotes`}
          onChange={this.onFieldChange}
          value={this.state.additionalNotes}
         />
        <InviteCode
          error={this.state.inviteCodeError}
          name='inviteCode'
          onChange={this.onFieldChange}
          value={this.state.inviteCode}
        />
        <div className={styles.formFieldset}>
          <button
            className={styles.submitButton}
            disabled={this.shouldDisableSubmit}
            type='submit'
          >{this.state.isSubmitting ? 'Saving...' : 'Save'}</button>
        </div>
      </form>
    )
  }
}

export default withRouter(AttendeeRSVPForm)
