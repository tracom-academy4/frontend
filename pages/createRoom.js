import React, {useState} from 'react'
import { Form, Button } from 'antd'
import FormBuilder from 'antd-form-builder'

import CustomLayout from '../components/layout'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import { SaveOutlined } from '@ant-design/icons';
import { postRooms } from '../apis/apis';

class CreateRoomState {
    isLoading = false;
    meta = []
    constructor() {
        makeAutoObservable(this)
    }

    postRooms = async () => {
        this.isLoading = true;
        this.meta = await postRooms()
        this.isLoading = false;
    }

}
const createRoomState = new CreateRoomState();

function create (){
    let [isSaving, setSaving]= useState(false);
    const meta = {
        fields: [
            { key: 'roomName', label: 'RoomName', rules:[{ required: true, message: 'Room name is required' }], hasFeedback: true },
            { key: 'capacity', label: 'Capacity', widget: 'number' , rules:[{ required: true, message: 'Capacity is required' }], hasFeedback: true },
            { key: 'tvDescription', label: 'TV', widget: 'checkbox' , hasFeedback: true },
            { key: 'whiteBoardDescription', label: 'Whiteboard', widget: 'checkbox' , hasFeedback: true},
            { key: 'phoneConferenceDescription', label: 'Phone', widget: 'checkbox' , hasFeedback: true},
        ],
    }

    const handleFinish = React.useCallback(values => {
        createRoomState.postRooms(setSaving)
        console.log('Submit: ', values)
    }, [])

    return (
        <CustomLayout>
            <Form onFinish={handleFinish}>
                <FormBuilder meta={meta} />
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading = { isSaving } >
                        Save Room
                    </Button>
                </Form.Item>
            </Form>
        </CustomLayout>
    )
}
export default observer(create)