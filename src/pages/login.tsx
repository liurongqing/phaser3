import * as React from 'react'
import { Form, Icon, Input, Button, Tabs, message } from 'antd'
import { fetchLogin } from '@/services/login'
import { params } from '@/utils'
import './login.css'

const { useState } = React
const Login = ({ history, form }) => {
  const [loading, setLoading] = useState(false)
  const { getFieldDecorator, validateFields } = form

  function onLogin() {
    setLoading(true)
    validateFields((err: any, values: any) => {
      if (!err) {
        const redirect = params().get('redirect')
        fetchLogin(values).then((response: any) => {
          if (response.code === 0) {
            message.success('登录成功！', 1, () => {
              setLoading(false)
              history.push(redirect || '/')
            })
          } else {
            setTimeout(() => {
              setLoading(false)
            }, 2500) // 与公用方法报错时间一致（request.js）
          }
        })
      }
    })
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <Icon type="cloud" className="login-logo" />
        <Form>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab={<span>密码登录</span>} key="1">
              <Form.Item>
                {getFieldDecorator('username', {
                  initialValue: ''
                })(
                  <Input
                    size="large"
                    prefix={
                      <Icon
                        type="mobile"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                    placeholder="手机号"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  initialValue: ''
                })(
                  <Input.Password
                    size="large"
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="密码"
                  />
                )}
              </Form.Item>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span>动态登录</span>} key="2">
              <Form.Item>
                <Input
                  size="large"
                  prefix={
                    <Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="手机号"
                />
              </Form.Item>
              <Form.Item>
                <div style={{ display: 'flex' }}>
                  <Input
                    size="large"
                    prefix={
                      <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="验证码"
                  />
                  <Button size="large" style={{ marginLeft: '10px' }}>
                    获取验证码
                  </Button>
                </div>
              </Form.Item>
            </Tabs.TabPane>
          </Tabs>
          <Form.Item>
            <div>
              <Button
                loading={loading}
                type="primary"
                size="large"
                block
                onClick={onLogin}
              >
                登 录
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Form.create()(Login)
