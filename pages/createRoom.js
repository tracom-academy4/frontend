import React, { useState } from 'react'
import { Checkbox, Divider, InputNumber } from 'antd';
import { Col, Button } from 'antd';
import {
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import CustomLayout from '../components/layout';

import { useRouter } from 'next/router'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { postRooms } from '../apis/apis'

class CreateRoomState {
    constructor() {
        makeAutoObservable(this)
    }
    submitting = false

    postRooms = async (room_id, capacity, phone_conference_description, room_name, tv_description, white_board_description) => {
        this.submitting = true

        try {
            await postRooms(room_id, capacity, phone_conference_description, room_name, tv_description, white_board_description)
        } catch (e) {
            console.log(e);
        } finally {
            this.submitting = false
        }
    }
}

const createRoomState = new CreateRoomState()

function createRoom() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const CheckboxGroup = Checkbox.Group;

    const plainOptions = ['TV', 'Whiteboard', 'Conference Phone'];
    const defaultCheckedList = ['Whiteboard'];

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const response = await roomState.getRooms(roomMeeting, email, capacity, organization)

    return (
        <CustomLayout>
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
                        <Form.Item label="Room Meeting">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Email">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Capacity">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Organization">
                            <Select>
                                <Select.Option value="Tracom">Tracom</Select.Option>
                                <Select.Option value="Pergamon">Pergamon</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </>
                <h4>Select ammenities:</h4>

                <>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </>

                <Col span={18}>
                    <Button htmlType="submit" submitting={newState.submitting}>
                        Create Room
                    </Button>
                </Col>
            </div>
        </CustomLayout>
    )
}

export default observer(createRoom)