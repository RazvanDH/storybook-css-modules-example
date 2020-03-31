import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import css from './generalConfig.css'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(storyFn => <div className={css.canvasWrapper}>{storyFn()}</div>)

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\Alert.stories\.js|mdx$/), module);

