import { Flex, Radio, Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import type { CheckboxGroupProps } from 'antd/es/checkbox'
import classes from './Auth.module.css'
import { useState } from 'react'

const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Login', value: 'Login' },
  { label: 'Registe', value: 'Registe' },
]

const onFinish = (values: any) => {
  console.log('Received values of form: ', values)
}

export const Auth = () => {
  const [authMode, setAuthMode] = useState<'Login' | 'Registe'>('Login')
  return (
    <main className={classes.wrap}>
      <article
        className={
          authMode === 'Login' ? classes.prevAuth : classes.prevRegiste
        }
      >
        <h2>Be with Rick and Morty right now</h2>
        <div>Even more adventures with us!</div>
      </article>
      <article className={classes.content}>
        <h3>Welcom to Rick and Morty</h3>
        <Flex vertical gap="middle">
          <Radio.Group
            block
            options={options}
            defaultValue="Login"
            optionType="button"
            buttonStyle="solid"
            size="large"
            className={classes.form}
            onChange={(e) => setAuthMode(e.target.value)}
          />
        </Flex>
        <div className={classes.text}>
          We are a pretty interesting startup with great ideas and big planes
        </div>
        {authMode === 'Login' ? (
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ width: '100%' }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </Flex>
            </Form.Item>
            <Form.Item style={{ width: '30%', marginLeft: 'auto' }}>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="register"
            initialValues={{ remember: true }}
            style={{ width: '100%' }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, type: 'email', message: 'Enter email' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Create password' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Confirm password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("Passwords don't match!"))
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm password"
              />
            </Form.Item>
            <Form.Item style={{ width: '30%', marginLeft: 'auto' }}>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        )}
      </article>
    </main>
  )
}
