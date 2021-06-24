import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
<<<<<<< HEAD
    TreeSelect,
} from 'antd';
import CustomLayout from '../components/layout';

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { newUser } from '../apis/apis'

class NewState {
    constructor() {
        makeAutoObservable(this)
    }
    submitting = false

    newUser = async (firstName, secondName, email, telephone, organization, role, password, confirmPassword) => {
        this.submitting = true

        try {
            await newUser(firstName, secondName, email, telephone, organization, role, password, confirmPassword)
        } catch (e) {
            console.log(e);
        } finally {
            this.submitting = false
        }
    }
}

const newState = new NewState()


function newUser() {
=======
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import CustomLayout from '../components/layout';

export default function newUser() {
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
<<<<<<< HEAD
    return (
        <CustomLayout>
=======
    return (        
        <CustomLayout>            
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
            <div>
                <h2>Please fill the form below to complete action:</h2>

                <>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >
                        <Form.Item label="Form Size" name="size">
                            <Radio.Group>
                                <Radio.Button value="small">Small</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="large">Large</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="First Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Second Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="telephone">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Organization">
                            <Select>
                                <Select.Option value="Tracom">Tracom</Select.Option>
                                <Select.Option value="Pergamon">Pergamon</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Role">
                            <TreeSelect
                                treeData={[
                                    {
                                        title: 'Admin',
                                        value: 'Admin',
                                    },
                                    {
                                        title: 'Member',
                                        value: 'Member',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Password">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Confirm Password">
                            <Input />
                        </Form.Item>

                        <Form.Item>
<<<<<<< HEAD
                            <Button htmlType="submit" submitting={newState.submitting}>
                                Create user
                            </Button>
=======
                            <Button>Create user</Button>
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
                        </Form.Item>

                    </Form>
                </>
<<<<<<< HEAD
            </div>
=======
            </div>            
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
            <style jsx>{`
 .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
 .trigger:hover {
    color: #1890ff;
  }
  
   .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #ffffff;
  }
`}</style>
<<<<<<< HEAD
        </CustomLayout>
    )
}
export default observer(newUser)
=======
        </CustomLayout>        
    )
}
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
