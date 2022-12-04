import React from 'react'

export default function FullName(props) {
  const { FN, LN } = props;
  return (
    <p>Hi, {FN} {LN}</p>
  )
}
