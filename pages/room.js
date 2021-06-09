import React from 'react'
import CustomLayout from '../components/layout'
import { Tabs } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Statistic, Row, Col, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const { TabPane } = Tabs;

export default function room() {
    return(
        <div>
        <CustomLayout>
        <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <HomeOutlined />
          Block A
        </span>
      }
      key="1"
    >
        <div className={''}>
            
            <Row gutter={16}>
    
            <Col span={12}>
              <Statistic title="Room" value={"Block A"} />
            </Col>
    
            <Col span={12}>
              <Statistic title="In use" value={"YES"} precision={2} />
              {/*<Button style={{ marginTop: 16 }} type="primary">
                 Recharge
               </Button>*/}
            </Col>
    
            <Col span={12}>
               <Statistic title="Capacity" value={10} />
            </Col>
    
            <Col span={12}>
              <Statistic title="Organization" value={"Tracom"} />
            </Col>

            <Col span={12}>
              <Statistic title="TV" value={"YES"} />
            </Col>

            <Col span={12}>
              <Statistic title="Whiteboard" value={"YES"} />
            </Col>

            <Col span={12}>
              <Statistic title="Conference phone" value={"YES"} />
            </Col>
            
            </Row>,
        </div>
    
    </TabPane>

    <TabPane
      tab={
        <span>
          <HomeOutlined />
          Block E
        </span>
      }
      key="2"
    >
        <div className={''}>
            
            <Row gutter={16}>
    
            <Col span={12}>
              <Statistic title="Room" value={"Block E"} />
            </Col>
    
            <Col span={12}>
              <Statistic title="In use" value={"NO"} precision={2} />
              {/*<Button style={{ marginTop: 16 }} type="primary">
                 Recharge
               </Button>*/}
            </Col>
    
            <Col span={12}>
               <Statistic title="Capacity" value={20} />
            </Col>
  
            <Col span={12}>
              <Statistic title="Organization" value={"Tracom"} />
            </Col>

            <Col span={12}>
              <Statistic title="TV" value={"YES"} />
            </Col>

            <Col span={12}>
              <Statistic title="Whiteboard" value={"YES"} />
            </Col>

            <Col span={12}>
              <Statistic title="Conference phone" value={"YES"} />
            </Col>

            
            
            </Row>,
        </div>
    </TabPane>
    </Tabs>
        </CustomLayout>
    </div>
    
    )
}
