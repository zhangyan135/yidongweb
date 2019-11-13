import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { WhiteSpace} from 'antd-mobile';
import { Carousel,Flex } from 'antd-mobile';
import chuang from './images/chaung.jpg';
import zhuangxiu from './images/zhuangxiu.jpg';
import zhinan from "./images/zhinan.jpg";
import dapei from "./images/dapei.jpg";
import remen from "./images/remen.jpg"
import haowu from "./images/haowu.jpg";

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                 style={{backgroundColor:'#3fcccb',color:'#000'}}
                 rightContent={[
                     <Icon key="0" type="search" style={{ marginRight: '16px',color:'#000' }} />,
                ]}
                >住吧家居</NavBar>
                <Carousel
                    style={{height:'200px'}}
                    autoplay={true}
                    infinite
                    >
                        <img
                            src={chuang}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px'}}
                        />
                         <img
                            src={zhuangxiu}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px' }}
                        />
                        <img
                            src={haowu}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px' }}
                        />
                </Carousel>
                <WhiteSpace />
                <Flex>
                    <Flex.Item><img style={{width:'100%',height:'150px'}} src={remen}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'150px'}}src={dapei}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'150px'}}src={zhinan}/></Flex.Item>
                </Flex>
                <WhiteSpace />
                <h1>热门推荐</h1>
                <img
                            src={zhuangxiu}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px' }}
                        />
                <WhiteSpace />
                <img
                            src={remen}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px' }}
                        />
            </div>
        )
    }
}
