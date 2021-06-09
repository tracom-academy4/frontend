import React from 'react'
import { Table, Tag, Space } from 'antd';
import CustomLayout from '../components/layout';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        firstName: 'Tracom',
        lastName: 'Tracom',
        email: '@tracom.co.ke',
        Organization: 'Tracom',
    },
    {
        key: '2',
        firstName: '',
        lastName: '',
        email: '',
        Organization: '',
    },
    {
        key: '3',
        firstName: '',
        lastName: '',
        email: '',
        Organization: '',

    },
];

export default function viewUsers() {
    return (
        <div>
            <CustomLayout>
            <Table dataSource={data}>
            <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="email" dataIndex="email" key="email" />
            <Column title="Organization" dataIndex="rganization" key="rganization" />
            
            {/*<Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            */}

            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                    </Space>
                )}
            />
            </Table>


            </CustomLayout>
        </div>       
    )
}
