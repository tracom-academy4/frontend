import React, { useCallback, } from 'react'
import Link from 'next/link'

import { Form, Select, Input, Button, Switch, DatePicker, Radio } from 'antd'
import FormBuilder from 'antd-form-builder'
import CustomLayout from '../components/layout'

import router, { useRouter } from 'next/router'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { postEvent, putEvent, delEvents } from '../apis/apis'

class EventState {
    constructor() {
        makeAutoObservable(this)
    }
    isEmpty = true;
    isSubmitting = false;

    postEvent = async (event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic) => {

        this.isEmpty = false
        this.submitting = true

        try {
            await postEvent(event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic)
        } catch (e) {
            console.log(e);
        } finally {
            this.isEmpty = true
            this.submitting = false
        }
    }
}

const eventState = new EventState()

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
    const sub = await eventState.postEvent(values)

    if (sub) {
        console.log(sub);
    } else {
        notification['error']({
        message: 'Submit failed'
        })
    }

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
                        <Button htmlType="submit" type="primary" submitting={eventState.submitting}>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </div>
        </CustomLayout>

    )
}

export default observer(meetDetails)
