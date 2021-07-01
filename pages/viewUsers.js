import React, { useEffect } from 'react'
import { Table, Space } from 'antd';
import CustomLayout from '../components/layout';
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { getAllUser } from '../apis/apis';

const columns = [
    {
        title: 'FirstName',
        dataIndex: 'firstName',
        key: 'firstName',
        render: text => <a>{text}</a>,
    },
    {
        title: 'SecondName',
        dataIndex: 'secondName',
        key: 'secondName',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'telephone',
        key: 'telephone',
        dataIndex: 'telephone',

    },
    {
        title: 'organization',
        key: 'organization',
        dataIndex: 'organization',
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



class UsersState {
    isLoading = false;
    data = []
    constructor() {
        makeAutoObservable(this)
    }

    getAllUser = async () => {
        this.isLoading = true;
        this.data = await getAllUser()
        this.isLoading = false;
    }

}
const usersState = new UsersState();

function viewUsers() {
    useEffect(() => {
        usersState.getAllUser()
    }, []);

    return (
        <CustomLayout>

            <Table columns={columns} dataSource={usersState.data} />

        </CustomLayout>

    )
}
export default observer(viewUsers)