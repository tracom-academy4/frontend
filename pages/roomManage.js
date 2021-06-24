import React, { useState } from 'react'
import {
    Tabs,
    Form,
    Input,
    Radio,
    Select,
<<<<<<< HEAD
} from 'antd';
import { Checkbox, Divider } from 'antd';
import { List } from 'antd';
=======
    TreeSelect,
} from 'antd';
import { Checkbox, Divider } from 'antd';
import { List, Avatar } from 'antd';
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
import { Statistic, Row, Col, Button } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { HomeOutlined } from '@ant-design/icons';
import CustomLayout from '../components/layout';

<<<<<<< HEAD
import { useRouter } from 'next/router'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { updateRooms } from '../apis/apis'

class UpdateRoomState {
    constructor() {
      makeAutoObservable(this)
    }
    isEmpty = true;
    isSubmitting = false;
  
    updateRooms = async (roomMeeting, email, capacity, organization) => {
  
      this.isEmpty = false
      this.submitting = true
  
      try {
        await updateRooms(roomMeeting, email, capacity, organization)
      } catch (e) {
        console.log(e);
      } finally {
        this.isEmpty = true
        this.submitting = false
      }
    }
  }
  
  const updateRoomState = new UpdateRoomState()

=======
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
export default function roomManage() {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const { TabPane } = Tabs;
    const renderTabBar = (props, DefaultTabBar) => (
        <Sticky bottomOffset={80}>
            {({ style }) => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
            )}
        </Sticky>
    );

    /*create*/
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

    /*View*/
    const data = [
        {
            title: 'Room A',
        },
        {
            title: 'Room E',
        },
    ];

    return (

        <CustomLayout>
            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>

                    <TabPane tab="View" key="1" style={{ height: 200 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        Avatar icon={<HomeOutlined />}
                                        title={<a href="/room">{item.title}</a>}
                                    />
                                </List.Item>
                            )}
                        />,

                    </TabPane>

                    <TabPane tab="Create" key="2" href="./roomManage">
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

                                    <Form.Item label="Organization">
                                        <Select>
                                            <Select.Option value="Tracom">Tracom</Select.Option>
                                            <Select.Option value="Pergamon">Pergamon</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    {/*<Form.Item>
                                        <Button>Create Room</Button>
                                    </Form.Item>
                                    */}



                                </Form>
                            </>
                        </div>

                        <h4>Select ammenities:</h4>

                        <>
                            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                Check all
                            </Checkbox>
                            <Divider />
                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                        </>
                        
                        <Col span={18}>
<<<<<<< HEAD
                            <Button submitting={updateState.submitting}>
                                Create Room
                            </Button>
=======
                            <Button>Create Room</Button>
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
                        </Col>

                    </TabPane>
                    

                    <TabPane tab="Edit" key="3">

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

                    </TabPane>

                    

                </Tabs>


            </StickyContainer>
        </CustomLayout>

    )

<<<<<<< HEAD
}

export default observer(roomManage)
=======
}
>>>>>>> 87859a5df246658bf05a96265484818d25d2a91f
