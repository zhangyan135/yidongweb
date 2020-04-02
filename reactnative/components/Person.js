import React, { Component } from 'react'
import {View,Text,Image, ScrollView,TouchableOpacity,BackHandler,ToastAndroid, AsyncStorage,Dimensions} from 'react-native'
import { Icon, Button, TabBar } from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker';

let width=Dimensions.get('window').width;
const options = {
    title: '选项',
    customButtons: [{ name: 'fb', title: '从相册中选择' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  let now=0;
export default class Person extends Component {
    constructor(props){
        super(props);
        this.state={
            isgoto:true,  
            avatarSource:require('../assets/my.jpg')
        }
    }
    onBackAndroid=()=>{
      if(new Date().getTime()-now<2000){
        BackHandler.exitApp();
      }else{
        ToastAndroid.show('再点一次退出程序',100);
        now = new Date().getTime();
        return true;
      }
    }
    exit=()=>{
      Actions.login();
      AsyncStorage.removeItem('user');
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
              if (response.didCancel) {
                return;
              } else if (response.error) {
                console.log('Error:', response.error);
              } else if (response.customButton) {
                console.log('custom:', response.customButton);
              } else {        
                const source = { uri: response.uri };
                this.setState({
                  avatarSource: source
                });
               AsyncStorage.setItem('photo',this.state.avatarSource)
              }
            });
      }
    render() {
        return (
           <ScrollView style={{backgroundColor:'white'}}>
              <View style={{width:width,height:300,backgroundColor:'red'}}>
              <TouchableOpacity style={{width:130,height:130,left:width*0.38,top:70,borderRadius:65,position:'absolute',overflow:'hidden'}}
              onPress={()=>this.takephoto()}>
                  <Image source={this.state.avatarSource} style={{width:130,height:130}}/>
              </TouchableOpacity>
                  <Text style={{fontSize:20,color:'white',left:'37%',marginTop:220}}>HELLO WORLD</Text>
              </View>
              <View style={{margin:20}}>
                <Icon name='reddit'/>
                <Text style={{marginTop:-20,marginLeft:30}}>我的个人中心</Text>
              </View>
              <View style={{height:1,width:width,backgroundColor:'#eee'}}></View>
              <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginLeft:width*0.1,marginTop:30}}>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='setting'/>
                    <Text>用户管理</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='environment'/>
                    <Text>收货地址</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='idcard'/>
                    <Text>我的信息</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='file-text'/>
                    <Text>我的订单</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='qrcode'/>
                    <Text>我的二维码</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='red-envelope'/>
                    <Text>我的积分</Text>
                </View>
              </View>
              <View style={{width:width*0.3,height:100,alignItems:'center',marginLeft:width*0.01}}>
                    <Icon name='star'/>
                    <Text>我的收藏</Text>
                </View>
            <View style={{height:5,width:width,backgroundColor:'#eee'}}></View>
             <View style={{margin:20}}>
                <Icon name='tag'/>
                <Text style={{marginTop:-20,marginLeft:30}}>E族活动</Text>
              </View>
              <View style={{height:1,width:width,backgroundColor:'#eee'}}></View>
              <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginLeft:width*0.1,marginTop:20}}>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='tool'/>
                    <Text>居家维修保养</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='safety-certificate'/>
                    <Text>出行接送</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='user'/>
                    <Text>我的受赠人</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='inbox'/>
                    <Text>我的住宿优惠</Text>
                </View>
                <View style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}}>
                    <Icon name='flag'/>
                    <Text>我的活动</Text>
                </View>
                <TouchableOpacity style={{width:width*0.3,height:100,alignItems:'center',flexWrap:'wrap'}} onPress={()=>{      
                     Actions.detail()
                    }
                    }>
                    <Icon name='form'/>
                    <Text>我的发布</Text>
                </TouchableOpacity>
              </View>
              <View style={{height:50,backgroundColor:'#eee',justifyContent:'center'}}> 
                  <Button onPress={this.exit}>退出登录</Button>
              </View>
           </ScrollView>
        )
    }
}
