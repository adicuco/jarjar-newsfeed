import React from 'react'
import PropTypes from 'prop-types'

import ViewUpdate from './view-update'
import AddUpdate from './add-update'

export default class JarJarNewsfeed extends React.PureComponent {
  static propTypes = {
    onAddUpdate: PropTypes.func.isRequired,
    updates: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired,
  }

  render () {
    const {
      onAddUpdate,
      updates,
    } = this.props

    return (
      <div className='jarjar-newsfeed'>
        <h1 className='display-1'>Jar Jar Newsfeed</h1>
        <br />
        <div className={'card-grid'}>
          {updates.map((update) => <ViewUpdate
            {...update}
            key={update.id}
          />)}
        </div>
      </div>
      )
  }
}
