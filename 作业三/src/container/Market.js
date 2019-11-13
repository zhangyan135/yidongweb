import React, { Component } from 'react'
import { NavBar, Icon,InputItem,Carousel,Flex} from 'antd-mobile';
import haowu from "./images/haowu.jpg";
import chuang from './images/chaung.jpg';
import zhuangxiu from './images/zhuangxiu.jpg';
import zhuo from "./images/zhuo.jpg";
import xiaochuang from "./images/xiaochuang.jpg";
import yi from "./images/yi.jpg"
import ji from "./images/ji.jpg"
import gui from "./images/gui.jpg"
import shujia from "./images/shujia.jpg"
import shafa from "./images/shafa.jpg"
import jiaju from "./images/jiaju.jpg"
import huwai from "./images/huwai.jpg"
import quanbu from "./images/quanbu.jpg"
import coffee from "./images/coffee.jpg"
import clock from "./images/clock.jpg"

export default class Market extends Component {
    render() {
       // const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px',color:'#000' }} />,
                    ]}
                    >灵感</NavBar>
                    <InputItem
                        clear
                        placeholder="输入关键字搜索"
                        ref={el => this.autoFocusInst = el}
                    >搜索</InputItem>
                    <Carousel
                    style={{height:'200px'}}
                    autoplay={true}
                    infinite
                    >
                   <img
                            src={haowu}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px'}}
                        />
                        <img
                            src={chuang}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px'}}
                        />
                        <img
                            src={zhuangxiu}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'200px'}}
                        />
                </Carousel>
                <Flex>
                    <Flex.Item><img style={{width:'100%',height:'100px'}} src={zhuo}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={xiaochuang}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={yi}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={ji}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={gui}/></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><img style={{width:'100%',height:'100px'}} src={shujia}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={shafa}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={jiaju}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={huwai}/></Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={quanbu}/></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><img style={{width:'100%',height:'100px'}} src={coffee}/>Top Art Stu 欧式风格精细 ￥39.95</Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={clock}/> 顺顺工艺欧式风格塑料 ￥83.99</Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><img style={{width:'100%',height:'100px'}} src={clock}/>Top Art Stu 欧式风格精细 ￥39.95</Flex.Item>
                    <Flex.Item><img style={{width:'100%',height:'100px'}}src={coffee}/> 顺顺工艺欧式风格塑料 ￥83.99</Flex.Item>
                </Flex>
            </div>
        )
    }
}
