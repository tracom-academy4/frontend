import React, { useCallback, } from 'react'

import { Form, Select, Input, Button, Switch, DatePicker, Radio } from 'antd'
import FormBuilder from 'antd-form-builder'
import CustomLayout from '../components/layout'

const { Option } = Select

export default function meetDetails() {
    const [form] = Form.useForm()
    const forceUpdate = FormBuilder.useForceUpdate()
    const handleFinish = useCallback(values => console.log('Submit: ', values), [])
    const meta1 = [
        { key: 'name.owner', label: 'Meeting Admin', required: true },
        { key: 'name.organization', label: 'Organization', required: true },
        { key: 'dom', label: 'Date of meeting', widget: 'date-picker', required: true },
    ]
    const meta2 = [
        {
            key: 'email',
            label: 'Email',
            rules: [{ type: 'email', message: 'Invalid email', required: true }],
        },

        { key: 'meeting topic', label: 'Meeting topic', required: true },


    ]
    return (
        <CustomLayout>
            <div>
                <h2>Please fill in the form below to complete action:</h2>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form
                    layout="horizontal"
                    form={form}
                    onFinish={handleFinish}
                    style={{ width: '500px' }}
                    onValuesChange={forceUpdate}
                >
                    <FormBuilder meta={meta1} form={form} />
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <FormBuilder meta={meta2} form={form} />

                    <Form.Item
                        name={['meeting', 'introduction']}
                        label="Description"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}>
                        <Input.TextArea />

                    </Form.Item>

                    <Form.Item label="Repetitive">
                        <Switch />
                    </Form.Item>

                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 16, offset: 8 }} className="form-footer">
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </div>
        </CustomLayout>

    )
}