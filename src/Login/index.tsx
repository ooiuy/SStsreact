import * as React from 'react'

const Login = () => {
  const onSubmit = () => {
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
