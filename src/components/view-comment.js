import React, {PureComponent, Fragment, } from 'react'
import PropTypes from 'prop-types'

export default class ViewComment extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render () {
    const {
      by,
      created,
      text,
    } = this.props

    return (<li className='view-comment'>
      {text} (by {by} @ {created})
    </li>)
  }
}