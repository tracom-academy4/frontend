import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    TreeSelect,
} from 'antd';
import CustomLayout from '../components/layout';

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { newUserCreate } from '../apis/apis'

class NewState {
    constructor() {
        makeAutoObservable(this)
    }
    isLoading = false;

    newUserCreate = async () => {
        this.isLoading = true;
        this.meta = await newUserCreate()
        this.isLoading = false;
    }
}

const newState = new NewState()


function newUser() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    let [isSaving, setSaving] = useState(false);
    //const resp = await newState.newUserCreate

    return (
        <CustomLayout>
            <div>
                <h2>Please fill the form below to complete action:</h2>

                <>
                    <Form
                        meta={meta}

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
                            <Button type="primary" htmlType="submit" loading={isSaving}>
                                Create user
                            </Button>
                        </Form.Item>

                    </Form>
                </>
            </div>
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
        </CustomLayout>
    )
}
export default observer(newUser)
