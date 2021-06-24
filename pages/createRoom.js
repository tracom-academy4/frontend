import React, { useState } from 'react'
import { Checkbox, Divider, InputNumber } from 'antd';
<<<<<<< HEAD
import { Col, Button } from 'antd';
import {
=======
import { Statistic, Row, Col, Button } from 'antd';
import {
    Tabs,
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import CustomLayout from '../components/layout';

<<<<<<< HEAD
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
=======
export default function createRoom() {
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
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

<<<<<<< HEAD
    const response = await roomState.getRooms(roomMeeting, email, capacity, organization)
    console.log(response)

=======
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
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

<<<<<<< HEAD
                <>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </>

                <Col span={18}>
                    <Button htmlType="submit" submitting={createRoomState.submitting}>
                        Create Room
                    </Button>
                </Col>
=======
                        <>
                            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                Check all
                            </Checkbox>
                            <Divider />
                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                        </>
                        
                        <Col span={18}>
                            <Button>Create Room</Button>
                        </Col>
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
            </div>
        </CustomLayout>
    )
}
<<<<<<< HEAD

export default observer(createRoom)
=======
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
