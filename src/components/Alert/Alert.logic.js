import React from 'react'
import PropTypes from 'prop-types'
import css from './Alert.css'

const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'danger',
    'info',
    'success',
    'warning',
  ]),
}

const defaultProps = {
  type: 'info',
}

const Alert = ({ children, type }) => (
  <div className={css[type]}>
    <span className={css[`icon-${type}`]} />
    <div className={css.content}>{children}</div>
  </div>
)

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps

export {
  Alert
}
