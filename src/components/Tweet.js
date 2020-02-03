import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="tweet">

      </div>
    )
  }
}

// Id prop is being passed to the Tweet component
// Because of this, the mapStateToProps function's second argument (ownProps) will be an object that has an id property with this value.
function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id]

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  }
}

export default connect(mapStateToProps)(Tweet)