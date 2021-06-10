import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import CustomLayout from '../components/layout';

export default function register() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (

            <div>
                <h2>Please fill the form below to complete action:</h2>

                
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
                        {/*<Form.Item label="Role">
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
                        */}

                        <Form.Item label="Password">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Confirm Password">
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button>
                                <Link href="/">
                                    Create User
                                </Link>
                            </Button>
                        </Form.Item>



                    </Form>
                
            </div>
    )
}