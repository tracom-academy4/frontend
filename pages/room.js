import React from 'react'
import Link from 'next/link'
import CustomLayout from '../components/layout'
import { Tabs } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Statistic, Row, Col, Button } from 'antd';

import { get, makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { getRooms } from '../apis/apis'

class RoomState {
  constructor() {
    makeAutoObservable(this)
  }

  getRooms = async (room_id, capacity, phone_conference_description, room_name, tv_description, white_board_description) => {

    try {
      await getRooms(room_id, capacity, phone_conference_description, room_name, tv_description, white_board_description)
    } catch (e) {
      console.log(e);
    } finally {
      get (room_id, capacity, phone_conference_description, room_name, tv_description, white_board_description)
    }
  }
}

const roomState = new RoomState()

const { Column, ColumnGroup } = Table;
const { TabPane } = Tabs;

export default function room() {
  return (
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
          {/*

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
        */}

        </Tabs>
      </CustomLayout>
    </div>

  )
}
