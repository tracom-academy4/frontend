import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { sleep } from '../utils/utils'
import { onLogin } from '../apis/apis'

import { Form, Input, Col, Button, Checkbox, notification } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



class LoginState {
  constructor() {
    makeAutoObservable(this)
  }
  isLoading = false;

  onLogin = async (username, password)=>{
    this.isLoading = true
    try{
      await onLogin(username, password)
      return true;
    }catch(e){
      console.log(e);
      return false;
    }finally{
      this.isLoading = false
    }
    
  }
}

const loginState = new LoginState()

function Home() {
  const onFinish = async (values) => {
    console.log('Success:', values);
    const resp = await loginState.onLogin(values.username, values.password)
    console.log(resp);
    if(resp){
      router.push("/dashboard")
    }else{
      notification['error']({
        message: 'Login failed',
        description:
          'Invalid username/Password!',
      });
    }
  };

  const router = useRouter();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MEETING PLANNER</title>
        <meta name="description" content=" " />
        <link rel="icon" href="/favicon Tracom.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MEETING PLANNER
        </h1>

        <p className={styles.description}>
          Get your meeting started ASAP!
        </p>

        <div className={styles.forms}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading = {loginState.isLoading} >
                Login
              </Button>
            </Form.Item>

            <Form.Item>
              <div className={styles.signUp}>

                <Button type="primary" htmlType="submit">
                  <Link href="./register">
                    Sign Up
                  </Link>
                </Button>

                <p>New User?</p>

              </div>

            </Form.Item>

          </Form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://tracom.co.ke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/tracom-logo-blue.svg" alt="Tracom logo" width={100} height={20} />
          </span>
        </a>
      </footer>

    </div>

  )
}
export default observer(Home)