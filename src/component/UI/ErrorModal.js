import React from 'react'

function ErrorModal() {

  return (
    <Card>
      <h1>{props.message}</h1>
      <p>{props.title}</p>
      <button type='submit' onClick={props.onConfirm}>Confirm</button>
    </Card>
  )
}

export default ErrorModal