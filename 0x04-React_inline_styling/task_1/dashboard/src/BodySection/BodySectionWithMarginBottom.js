import React, { Component } from 'react'
import BodySection from './BodySection'
import PropTypes from 'prop-types'
import './BodySectionWithMarginBottom.css'


export class BodySectionWithMarginBottom extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    };

  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>
    )
  }
}

export default BodySectionWithMarginBottom