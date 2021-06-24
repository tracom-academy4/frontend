import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
<<<<<<< HEAD

import { useRouter } from 'next/router'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { sleep } from '../utils/utils'
import { onLogin } from '../apis/apis'

import { Form, Input, Col, Button, Checkbox, notification } from 'antd';
=======
import { Form, Input, Col, Button, Checkbox } from 'antd';
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f

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

<<<<<<< HEAD
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
      console.error(e);
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

=======
export default function Home() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <Head>
<<<<<<< HEAD
        <title>MEETING PLANNER</title>
=======
        <title>MEET PLANNER</title>
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
        <meta name="description" content=" " />
        <link rel="icon" href="/favicon Tracom.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
<<<<<<< HEAD
          MEETING PLANNER
=======
          MEET PLANNER
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
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
<<<<<<< HEAD
              <Button type="primary" htmlType="submit" loading = {loginState.isLoading} >
                Login
=======
              <Button type="primary" htmlType="submit">
                <Link href="./dashboard">
                  Login
                </Link>
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
              </Button>
            </Form.Item>

            <Form.Item>
              <div className={styles.signUp}>

<<<<<<< HEAD
                <Button type="primary" htmlType="submit" loading = {loginState.isLoading}>
=======
                <Button type="primary" htmlType="submit">
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
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
<<<<<<< HEAD
            <Image src="/tracom-logo-blue.svg" alt="Tracom logo" width={100} height={20} />
=======
            <Image src="/tracom-logo-blue.svg" alt="Tracom logo" width={72} height={16} />
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
          </span>
        </a>
      </footer>

    </div>

  )
}
<<<<<<< HEAD
export default observer(Home)
=======
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
