/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//yarn add react-native-router-flux@4.0.6
import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,StatusBar,TextInput,FlatList} from 'react-native';
const App= () => {
  let data=[];
  let [isfresh,setFresh]=useState(false);
    for(var i=0;i<20;i++){
      data.push({key:i+'',id:i,title:<View style={{flexDirection:"row",justifyContent:'space-around',flexWrap:'wrap-reverse'}}>
        <View style={{width:'45%',backgroundColor:'white',marginBottom:10}}>
            <Image style={{width:'100%'}} source={require('../assets/tu1.jpg')}/> 
            <Text style={{marginLeft:'10%',fontSize:15}}>Oishi/上好佳玉米卷20包鹏华休闲食品</Text>
            <Text style={{color:'red',marginLeft:'10%',fontSize:15}}>36.00</Text>
        </View>
        <View style={{width:'45%',backgroundColor:'white',marginBottom:10}}>
            <Image style={{width:'100%'}} source={require('../assets/tu2.jpg')}/>
            <Text style={{marginLeft:'10%',fontSize:15}}>Oishi/上好佳玉米卷20包鹏华休闲食品</Text>
            <Text style={{color:'red',marginLeft:'10%',fontSize:15}}>36.00</Text>
        </View>
      </View> })
    }
    let updateData=()=>{
      setFresh(true);
      setTimeout(()=>{
        setFresh(false)
      },2000)
    }
    let [da,setDa]=useState(data);
    let addData=()=>{
      for(var i=20;i<40;i++){
        data.push({key:i+'',id:i,title:<View style={{flexDirection:"row",justifyContent:'space-around',flexWrap:'wrap-reverse'}}>
        <View style={{width:'45%',backgroundColor:'white',marginBottom:10}}>
            <Image style={{width:'100%'}} source={require('../assets/tu1.jpg')}/> 
            <Text style={{marginLeft:'10%',fontSize:15}}>Oishi/上好佳玉米卷20包鹏华休闲食品</Text>
            <Text style={{color:'red',marginLeft:'10%',fontSize:15}}>36.00</Text>
        </View>
        <View style={{width:'45%',backgroundColor:'white',marginBottom:10}}>
            <Image style={{width:'100%'}} source={require('../assets/tu2.jpg')}/>
            <Text style={{marginLeft:'10%',fontSize:15}}>Oishi/上好佳玉米卷20包鹏华休闲食品</Text>
            <Text style={{color:'red',marginLeft:'10%',fontSize:15}}>36.00</Text>
        </View>
          </View>})
      }
      setDa(data);
    }
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
    <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white'}}>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:400,height:40,backgroundColor:'#eeeeee',alignItems:'center',borderRadius:5}}>
          <TextInput placeholder='请输入商品名称' style={{width:300,height:50}}/> 
          <Image style={{width:40,height:40}} source={require('../assets/tu3.jpg')}/>          
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'white',height:50,alignItems:'center'}}>
      <Text style={{width:'20%',textAlign:'center',color:'red',fontSize:20}}>综合</Text>
      <Text style={{width:'20%',textAlign:'center',fontSize:20}}>销量</Text>
      <Text style={{width:'20%',textAlign:'center',fontSize:20}}>新品</Text>
      <Text style={{width:'20%',textAlign:'center',fontSize:20}}>价格</Text>
      <Text style={{width:'20%',textAlign:'center',fontSize:20}}>值用</Text>
    </View>
     <FlatList data={da} onEndReached={addData} refreshing={isfresh} onRefresh={updateData} renderItem={({item,index})=>(
            <View>{item.title}</View>
        )}/>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
