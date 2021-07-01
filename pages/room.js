import { Table, Space, Button } from 'antd';
import Link from 'next/link'

import CustomLayout from '../components/layout';

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { getRooms } from '../apis/apis';

import { PlusOutlined } from '@ant-design/icons';

import React, { useEffect } from 'react'

const columns = [
  {
    title: 'Room ID',
    dataIndex: 'roomId',
    key: 'roomId',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'roomName',
    key: 'roomName',
  },
  {
    title: 'Capacity',
    dataIndex: 'capacity',
    key: 'capacity',
  },
  {
    title: 'Tv',
    dataIndex: 'tvDescription',
    key: 'tvDescription',
  },
  {
    title: 'Whiteboard',
    dataIndex: 'whiteBoardDescription',
    key: 'whiteBoardDescription',
  },
  {
    title: 'Phone',
    dataIndex: 'phoneConferenceDescription',
    key: 'phoneConferenceDescription',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

/*
const data = [
  {
    "roomId": 20,
    "capacity": 5,
    "roomName": "Pergamon Block A",
    "tvDescription": "present",
    "whiteBoardDescription": "present",
    "phoneConferenceDescription": "present"
  }
];
*/

class RoomState {
  isLoading = false;
  data = []
  constructor() {
    makeAutoObservable(this)
  }

  getRooms = async () => {
    this.isLoading = true;
    this.data = await getRooms()
    this.isLoading = false;
  }

}

const roomState = new RoomState();

function viewMeeting() {
  useEffect(() => {
    roomState.getRooms()
  }, []);


  return (
    <CustomLayout>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} >
          <Link href="./createRoom">
            Add meeting room
          </Link>
        </Button>

      </Space>
      <Table loading={roomState.isLoading} columns={columns} dataSource={roomState.data} />
    </CustomLayout>
  )
}

export default observer(viewMeeting)

