import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import request from '@/utils/http'

function Login() {
  const [logindata, setLogindata] = useState({})
  const onLogin = async () => {
    try {
      let response = await request.post('/v1/api/node/auth/signin', {
        identify_code: 'Sxc6dbdIeNEMnj1nCF6ZaA==',
        login_type: 'ADMIN',
        magic_no: '1b4be3e317826d0c9ca2e8b54bd04710',
        username: '18698729476'
      })
      console.log(response)
      setLogindata(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <Button type="primary" onClick={onLogin}>
        Primary Button
      </Button>
      <div>{JSON.stringify(logindata)}</div>
    </div>
  )
}

export default Login
