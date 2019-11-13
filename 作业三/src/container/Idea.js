import React, { Component } from 'react';
import { Tabs, WhiteSpace,Flex,NavBar, Icon } from 'antd-mobile';
import maotan from './images/maotan.jpg';
import neishi from './images/neishi.jpg';
import kaoyi from './images/kaoyi.jpg';
import canju from './images/canju.jpg';

export default class Home extends Component {
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '冬季' },
      { title: '宜家' },
      { title: '小清新' },
      { title: '小户型' },
      { title: '个性色彩' },
      { title: '落地窗' },
      { title: '海景房' },
    ];
    return (
      <div>
           <NavBar
            style={{backgroundColor:'#3fcccb',color:'#000'}}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px',color:'#000' }} />,
            ]}
            >灵感</NavBar>
        <WhiteSpace />
        <Tabs tabs={tabs}
          initialPage={1}
          >
            <div>
              <Flex>
                  <Flex.Item><img style={{width:'100%',height:'160px'}} src={maotan}/></Flex.Item>
                  <Flex.Item><img style={{width:'100%',height:'160px'}}src={neishi}/></Flex.Item>
            </Flex>
            <Flex>
                  <Flex.Item><img style={{width:'100%',height:'160px'}}src={kaoyi}/></Flex.Item>
                  <Flex.Item><img style={{width:'100%',height:'160px'}}src={canju}/></Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item><img style={{width:'100%',height:'160px'}}src={neishi}/></Flex.Item>
                <Flex.Item><img style={{width:'100%',height:'160px'}}src={maotan}/></Flex.Item>
            </Flex>
        </div>
        </Tabs>
      </div>
    );
  }
}