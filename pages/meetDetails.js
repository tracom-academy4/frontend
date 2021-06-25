import React, { useCallback, } from 'react'

import { Form, Select, Input, Button, Switch, DatePicker, Radio } from 'antd'
import FormBuilder from 'antd-form-builder'
import CustomLayout from '../components/layout'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { postEvent, putEvent, delEvents } from '../apis/apis'


const { Option } = Select

class EventState {
    constructor() {
        makeAutoObservable(this)
    }
    isEmpty = true;
    isSubmitting = false;
    isLoading = false;

    postEvent = async (event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic) => {

        this.isEmpty = false
        this.submitting = true
        this.isLoading = true

        try {
            await postEvent(event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic)
        } catch (e) {
            console.log(e);
        } finally {
            this.isEmpty = true
            this.submitting = false
            this.isLoading = false
        }
    }
}

const eventState = new EventState()


function meetDetails() {

    const [form] = Form.useForm()
    const forceUpdate = FormBuilder.useForceUpdate()
    const handleFinish = useCallback(values => console.log('Submit: ', values), [])
    const meta = [
        { key: 'eventId', label: 'EventId' },
        { key: 'meetingStartDate', label: 'MeetingStartDate', widget: 'date-picker', required: true },
        { key: 'meetingEndDate', label: 'MeetingEndDate', widget: 'date-picker', required: true },
        { key: 'capacity', label: 'capacity' },
        { key: 'meeting topic', label: 'Meeting topic', required: true }
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
                    <FormBuilder meta={meta} form={form} />
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

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

                    <Form.Item wrapperCol={{ span: 16, offset: 8 }} className="form-footer">
                        <Button htmlType="submit" type="primary" loading={eventState.isloading}>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </div>
        </CustomLayout>

    )
}

export default observer(meetDetails)
