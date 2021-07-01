import React, { useCallback, useState } from 'react'
import { Form, Button, Modal } from 'antd'
import moment from 'moment'
import FormBuilder from 'antd-form-builder'
import CustomLayout from '../components/layout'
import { updateRooms } from '../apis/apis';
import { observer } from 'mobx-react'
import { makeAutoObservable } from "mobx"

class UpdateRoomState {
    isLoading = false;
    constructor() {
        makeAutoObservable(this)
    }

    updateRooms = async () => {
        this.isLoading = true;
        this.meta = await updateRooms()
        this.isLoading = false;
    }

}
const updateRoomState = new UpdateRoomState();


const MOCK_INFO = {
    roomId: '20',
    roomName : ' Tracom Block A',
    capacity: '25',
    email: 'myemail@gmail.com',
    dateOfMeeting: moment('2100-01-01'),
    tvDescription: 'present',
    whiteboardDescription: 'present',
    phoneConferenceDescription: 'present',
}
const DateView = ({ value }) => value.format('MMM Do YYYY')

function roomManage() {
    const [form] = Form.useForm()
    const [viewMode, setViewMode] = useState(true)
    const [pending, setPending] = useState(false)
    const [roomInfo, setRoomInfo] = useState(MOCK_INFO)

    let [isSaving, setSaving]= useState(false);
    
    const handleFinish = useCallback(values => {
        updateRoomState.updateRooms(setSaving)
        console.log('Submit: ', values)

        setPending(true)
        setTimeout(() => {
            setPending(false)
            setRoomInfo(values)
            setViewMode(true)
            Modal.success({
                title: 'Success',
                content: 'Infomation updated.',
            })
        }, 1500)
    }, [])

    const getMeta = () => {
        
        const meta = {
            columns: 2,
            disabled: pending,
            initialValues: roomInfo,
            fields: [
                { key: 'roomId', label: 'room ID', required: true },
                { key: 'roomName', label: 'Room Name', required: true },
                { key: 'capacity', label: 'Capacity', required: true },
                //pending notifications completion
                { key: 'dateOfMeeting', label: 'Date of Meeting', widget: 'date-picker', viewWidget: DateView, required: true},
                //{ key: 'email', label: 'Email' },
                { key: 'tvDescription', label: 'TV' },
                { key: 'whiteboardDescription', label: 'Whiteboard', colSpan: 2 },
                { key: 'phoneConferenceDescription', label: 'Phone' },
            ],
        }
        return meta
    }

    return (
        <CustomLayout>
            <div>
                <Form layout="horizontal" form={form} onFinish={handleFinish} style={{ width: '800px' }}>
                    <h1 style={{ height: '40px', fontSize: '16px', marginTop: '50px', color: '#888' }}>
                        Room Infomation
                        {viewMode && (
                            <Button type="link" onClick={() => setViewMode(false)} style={{ float: 'right' }}>
                                Edit
                            </Button>
                        )}
                    </h1>
                    <FormBuilder form={form} getMeta={getMeta} viewMode={viewMode} />
                    {!viewMode && (
                        <Form.Item className="form-footer" wrapperCol={{ span: 16, offset: 4 }}>
                            <Button htmlType="submit" type="primary" disabled={pending} loading = { isSaving }>
                                {pending ? 'Updating...' : 'Update' }
                            </Button>
                            <Button
                                onClick={() => {
                                    form.resetFields()
                                    setViewMode(true)
                                }}
                                style={{ marginLeft: '15px' }}
                            >
                                Cancel
                            </Button>
                        </Form.Item>
                    )}
                </Form>
            </div>
        </CustomLayout>
    )
}
export default observer(roomManage)