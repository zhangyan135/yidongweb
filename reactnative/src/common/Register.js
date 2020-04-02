import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput,TouchableOpacity, ToastAndroid, AsyncStorage,Alert } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            email:'',
            isreg:false
        }
    }
    userhandle=(text)=>{
        this.setState({
            username:text
        })
    }
    pwdhandle=(text)=>{
        this.setState({
            pwd:text
        })
    }
    emailhandle=(text)=>{
        this.setState({
            email:text
        })
    }
    register=()=>{
        this.setState({isreg:true})
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd,
                email:this.state.email
            }).then(res=>{
                AsyncStorage.setItem('userreg',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({
                        isreg:false
                    })
                if(res.data.username==''){
                    Alert.alert('用户名不能为空')
                }else if(res.data.pwd==''){
                    Alert.alert('请设置6位数密码')
                }else if(res.data.email==''){
                    Alert.alert('请绑定邮箱')
                }else{
                    if(res.data.tag=='0'){
                        Alert.alert('用户名重复')
                    }else if(res.data.tag=='1'){
                        Alert.alert('邮箱格式不正确')
                    }else{
                        Alert.alert('注册成功，立即登录')
                        Actions.login();
                    }
                }    
                })
            })
        }
render() {
    return (
        <View style={{flex: 1,justifyContent: 'center'}}>
          <View style={{alignItems:'center'}}>
            <View style={styles.inp}>
                <Icon name='user' color='red'/>
                <TextInput placeholder="用户名"  onChangeText={this.userhandle}/>
            </View>
            <View style={styles.inp}>
                <Icon name='lock' color='red'/>
                <TextInput placeholder="密码"  onChangeText={this.pwdhandle}/>
            </View>
            <View style={styles.inp}>
                <Icon name='mail' color='red'/>
                <TextInput placeholder="邮箱"  onChangeText={this.emailhandle}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.register}>
                <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>Actions.login()}>
                <Text>立即登录</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        )
    }
}
 const styles=StyleSheet.create({
     inp:{
        width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20
     },
     btn:{
        width: '80%',
        height: 40,
        backgroundColor: '#ccc',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
     }
 })