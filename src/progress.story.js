import React from 'react'
import { storiesOf } from '@storybook/react'
import { Progress } from './index'

const stories = storiesOf('Progress', module)

stories.add('indeterminate', () => (
  <Progress />
))

stories.add('custom', () => (
  <Progress
    backgroundColor='#fcdfdf'
    progressColor='#f9575b'
    height={10}
  />
))
