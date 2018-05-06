import React from 'react'
import { string, number } from 'prop-types'
import styled from 'styled-components'

const StyledProgress = styled.div`
  background-color: ${p => p.backgroundColor};
  height: ${p => p.height}px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-radius: 2px;
  overflow: hidden;

  .indeterminate {
    background-color: ${p => p.progressColor};
    box-shadow: 0 0 10px ${p => p.progressColor}, 0 0 5px ${p => p.progressColor};

    &:before {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    &:after {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      animation-delay: 1.15s;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }
`

const Progress = ({ progressColor, backgroundColor, height }) => (
  <StyledProgress
    progressColor={progressColor}
    backgroundColor={backgroundColor}
    height={height}>
    <div className='indeterminate' />
  </StyledProgress>
)

Progress.propTypes = {
  progressColor: string,
  backgroundColor: string,
  height: number
}

Progress.defaultProps = {
  backgroundColor: 'transparent',
  height: 3,
  progressColor: '#6197c6'
}

export { Progress }
