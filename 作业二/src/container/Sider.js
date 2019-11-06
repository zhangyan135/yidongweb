import React, { Component } from 'react'
import { generateKeyPair } from 'crypto'

export default class Sider extends Component {
    render() {
        return (
            <div className="sider">
                <div className="side">
                    <p>Cnode:Node.js专业中文社区</p>
                    <br/>
                    <p>您可以登录或注册，也可以</p>
                    <button>通过Github登录</button>
                </div>
                <div className="sideimg">
                    <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""/>
                    <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                    <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""/>
                </div>
                <div className="topic">
                    <p style={{backgroundColor:'#ddd'}}>无人回复的话题</p>
                    <p>求助：server端无人响应问题</p>
                    <p>webpack4 使用模块异步加载的问题</p>
                    <p>JavaScript PNG 图片编码和解码</p>
                    <p>你好，可以把网站做成小程序吗</p>
                    <p>只因有了它，我找到了优秀的候选人</p>
                </div>
                <div className='topic'>
                    <p style={{backgroundColor:'#ddd'}}>积分榜 TOP 100>></p>
                    <p>21735 i5ting</p>
                    <p>21735 i5ting</p>
                    <p>21735 i5ting</p>
                    <p>21735 i5ting</p>
                    <p>21735 i5ting</p>
                </div>
                <div className="sideimg">
                    <h4>友情社区</h4>
                    <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
                    <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="" />
                    <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="" />
                    <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="" />
                </div>
                <div className="sideimg">
                    <h4>客户端二维码</h4>
                    <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" />
                    <p style={{textAlign:'center'}}>客户端源码地址</p>
                </div>
            </div>
        )
    }
}
