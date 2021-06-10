import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Form, Input, Col, Button, Checkbox } from 'antd';

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

export default function Home() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MEET PLANNER</title>
        <meta name="description" content=" " />
        <link rel="icon" href="/favicon Tracom.ico" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MEET PLANNER
        </h1>

        <p className={styles.description}>
          Get your meeting started ASAP!
        </p>

        
        <div className={styles.signUp}>
          
            <Button type="primary" htmlType="submit">
              <Link href="./register">
                Sign Up
              </Link>
            </Button>
          
        </div>

        
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
              <Button type="primary" htmlType="submit">
                <Link href="./dashboard">
                  Login
                </Link>
              </Button>
            </Form.Item>

            <Form.Item>

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
            <Image src="/tracom-logo-blue.svg" alt="Tracom logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>

  )
}
