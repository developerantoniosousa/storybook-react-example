import React from 'react';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import PropTypes from 'prop-types';

export default function Alarm(props) {
  return (
    <Button {...props}>
      <AccessAlarmIcon />
      {props.children || 'Wake up'}
    </Button>
  )
}

Alarm.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
}