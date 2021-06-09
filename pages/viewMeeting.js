import { Collapse, Select } from 'antd';
import { DeleteOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import CustomLayout from '../components/layout';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  Tracom Services has a meeting on Wednesday 06/08/21 at 9.00AM.
  Meeting will be held in meeting room block A

`;

const text1 = `
  Tracom Services has a meeting on Wednesday 06/08/21 at 9.00AM.
  Meeting will be held in meeting room block A

`;

const Perg = `
  Tracom Services has a meeting on Wednesday 06/08/21 at 9.00AM.
  Meeting will be held in meeting room block A

`;

const genExtra = () => (
  <div>
  <Button type="primary" danger>   
  <DeleteOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
  </Button> 
  </div>
);

export default class viewMeeting extends React.Component {
    state = {
        expandIconPosition: 'left',
      };
    
      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    
      render() {
        const { expandIconPosition } = this.state;
        return (
            <CustomLayout>
          <>
            <Collapse
              defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={expandIconPosition}
            >
              <Panel header="TRACOM 9AM||08/06/21" key="1" extra={genExtra()}>
                <div>{text}</div>
              </Panel>
              <Panel header="TRACOM 11AM||08/06/21" key="2" extra={genExtra()}>
                <div>{text1}</div>
              </Panel>
              <Panel header="PERGAMON 2PM||08/06/21" key="3" extra={genExtra()}>
                <div>{Perg}</div>
              </Panel>
              <Panel header="PERGAMON 2PM||08/06/21" key="4" extra={genExtra()}>
                <div>{Perg}</div>
              </Panel>
            </Collapse>
            <br />
            <span>Expand Icon Position: </span>
            <Select
              value={expandIconPosition}
              style={{ margin: '0 8px' }}
              onChange={this.onPositionChange}
            >
              <Option value="left">left</Option>
              <Option value="right">right</Option>
            </Select>
          </>
          </CustomLayout>
        );
    }
}
