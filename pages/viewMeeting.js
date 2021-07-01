import { Table, Space } from 'antd';

import React, { useEffect } from 'react'
import CustomLayout from '../components/layout';

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { getBoardRoomMeeting } from '../apis/apis';

const columns = [
  {
    title: 'EventId',
    dataIndex: 'eventId',
    key: 'eventId',
    render: text => <a>{text}</a>,
  },
  {
    title: 'MeetingStartDate',
    dataIndex: 'meetingStartDate',
    key: 'meetingStartDate',
  },
  {
    title: 'MeetingEndDate',
    dataIndex: 'meetingEndDate',
    key: 'meetingEndDate',
  },
  {
    title: 'capacity',
    key: 'capacity',
    dataIndex: 'capacity',
   
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
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

*/

class GetEventState {
  isLoading = false;
  data = []
  constructor() {
    makeAutoObservable(this)
  }

  getBoardRoomMeeting = async () => {
    this.isLoading = true;
    this.data = await getBoardRoomMeeting()
    this.isLoading = false;
  }

}

const getEventState = new GetEventState();

function viewMeeting() {

  useEffect(() => {
    getEventState.getBoardRoomMeeting()
  }, []);

  return (
    <CustomLayout>

      <Table columns={columns} dataSource={getEventState.data} />

    </CustomLayout>
  )
}

export default observer(viewMeeting)
