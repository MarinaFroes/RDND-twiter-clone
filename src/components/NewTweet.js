import React, { Component } from 'react'

class NewTweet extends Component {
  state = {
    text: ''
  }

  // In this case, it's simpler to have a local state
  // Only this component is using this state
  handleChange = e => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { text } = this.state

    // TODO: Add tweet to store

    console.log('New tweet: ', text)

    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { text } = this.state

    const tweetLeft = 280 - text.length

    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            maxLength={280}
            className="textarea"
            placeholder="What's happening?"
            onChange={this.handleChange}
            value={text}
          />
          {tweetLeft <= 100 && (
            <div className="tweet-length">
              {tweetLeft}
            </div>
          )}
          <button
            className="btn"
            type="submit"
            disabled={text === ""}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewTweet