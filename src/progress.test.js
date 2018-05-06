import React from 'react'
import { shallow } from 'enzyme'
import { Progress } from './index'

describe('<Progress />', () => {
  it('should be render correctly', () => {
    const progress = shallow(
      <Progress />
    )

    expect(progress).toMatchSnapshot()
  })

  it('should be set backgroundColor correctly', () => {
    const backgroundColor = '#000'

    const progress = shallow(
      <Progress
        backgroundColor={backgroundColor}
      />
    )

    expect(progress.prop('backgroundColor')).toEqual(backgroundColor);
  })

  it('should be set progressColor correctly', () => {
    const progressColor = '#fff'

    const progress = shallow(
      <Progress
        progressColor={progressColor}
      />
    )

    expect(progress.prop('progressColor')).toEqual(progressColor);
  })

  it('should be set height correctly', () => {
    const height = 10

    const progress = shallow(
      <Progress
        height={height}
      />
    )

    expect(progress.prop('height')).toEqual(height);
  })
})
