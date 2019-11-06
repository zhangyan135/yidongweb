import React, { Component } from 'react'

export default class Api extends Component {
    render() {
        return (
            <div>
              <h1> 主题</h1>
get /topics 主题首页
接收 get 参数

page Number 页数
tab String 主题分类。目前有 ask share job good
limit Number 每一页的主题数量
mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
示例：/api/v1/topics

get /topic/:id 主题详情
接收 get 参数

mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
示例：/api/v1/topic/5433d5e4e737cbe96dcef312

<h1>主题收藏</h1>
post /topic_collect/collect 收藏主题
接收 post 参数

accesstoken String 用户的 accessToken
topic_id String 主题的id
返回值示例

post /topic_collect/de_collect 取消主题
接收 post 参数

accesstoken String 用户的 accessToken
topic_id String 主题的id
            </div>
        )
    }
}
