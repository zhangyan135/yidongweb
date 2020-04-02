import React, { Component } from 'react'
import { View,Text,ScrollView, ToastAndroid, Alert, Dimensions} from 'react-native'
import Button from 'react-native-button'
import {MessageBarManager } from 'react-native-message-bar';
import { Icon,Toast} from '@ant-design/react-native';

let width=Dimensions.get('window').width;
const rootUrl='https://www.fastmock.site/mock/162cbc172de12ee6a563f44089669a6a/api'
export default class Details extends Component {
    constructor(){
        super();
        this.state={
            title:[],
            num:1,
            resp:[],
        }
    }
    componentDidMount(){
        fetch("https://cnodejs.org/api/v1/topics?limit=15")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                title:res.data
            })
        })
        fetch(rootUrl+'/topics?limit=15')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                response:res.data
            })
        })
    }
    render() {
        var time=[];
         var tim=[];
        for(var i=0;i<this.state.title.length;i++){
            time[i]=this.state.title[i].create_at
            tim[i]=time[i].split('T')[0];
        }
        var len=this.state.title.length;
        var tit=[];
        var t=[]
        for(var x=0;x<len;x++){
            tit[x]=this.state.title[x].title;
            if(tit[x].length>=15){
              t[x]=tit[x].substr(0,15)+' ...'
            }else{
                t[x]=tit[x]
            }
        }
        let rdom=[];
        let str=[];
        for(var a=0;a<=15;a++){
            rdom[a]=Math.random()*15
            if(rdom[a]<=7){
                str[a]='已回复'
            }else{
                str[a]='未回复'
            }
        }

        return (
            <ScrollView hideTabBar>
                <View style={{flexDirection:'row',height:35,justifyContent:"space-around",backgroundColor:'red',alignItems:'center'}}>
                    <Icon name='left'/>
                    <Text style={{width:width*0.7,textAlign:'center',color:'white'}}>我的发布</Text>
                    <Icon name='dash' size='lg'/>
                </View>
            <View>
               {
                     this.state.title.map((item,index)=>(
                         <View style={{height:45,width:width,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <Text style={{fontSize:15,width:width*0.5}}>{t[index]}</Text>
                            <Text>{tim[index]}</Text>
                     <Text style={{color:rdom[index]<=7?'red':'black'}}>{str[index]}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:width,marginTop:20}}>
                <Button style={{backgroundColor:'red',width:width*0.2,height:30,borderRadius:15}} onPress={()=>{
                    var num=this.state.num;
                    if(num==1){
                        ToastAndroid.show('已经是首页',100);
                    }else{
                        var number=num-1;
                        this.setState({
                            num:number
                        })
                        fetch("https://cnodejs.org/api/v1/topics?limit=15&page="+num)
                        .then((res)=>res.json())
                        .then((res)=>{
                            this.setState({title:res.data});
                        })
                    }
                }}>上一页</Button>
                <Text style={{width:width*0.2,textAlign:'center'}}>第{this.state.num}页</Text>
                <Button style={{backgroundColor:'red',width:width*0.2,height:30,borderRadius:15}} onPress={()=>{
                    var num=this.state.num
                    var number=num+1
                    this.setState({
                        num:number
                    })
                    fetch("https://cnodejs.org/api/v1/topics?limit=15&page="+num)
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({title:res.data});
                    })
                }}>下一页</Button>
            </View>
            </ScrollView>
        )
    }
}
