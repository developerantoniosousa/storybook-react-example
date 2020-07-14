import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";

import Alarm from './Alarm';

export function Component() {
  return (
    <Alarm variant={text('variant', 'contained')} onClick={action('nice!')}>{text('children', 'children')}</Alarm>
  );
}

export default {
  title: 'Alarm',
  decorators: [withKnobs],
  component: Component,
}

Component.story = {
  name: 'DEFAULT',
};

