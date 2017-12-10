import React from 'react'
import {
  Switch,
  Route
} from 'react-router'

import BridalParty from './components/bridal-party-page'
import Home from './components/home-page'
import Lodging from './components/lodging-page'
import Registry from './components/registry-page'
import RSVP from './components/rsvp-page'
import RSVPConfirmation from './components/rsvp-confirmation-page'
import Venue from './components/venue-page'


export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/lodging' component={Lodging} />
    <Route exact path='/bridal-party' component={BridalParty} />
    <Route exact path='/registry' component={Registry} />
    <Route exact path='/rsvp' component={RSVP} />
    <Route exact path='/thanks' component={RSVPConfirmation} />
    <Route exact path='/venue' component={Venue} />
  </Switch>
)
