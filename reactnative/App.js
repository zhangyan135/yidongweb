import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,AsyncStorage,Image, BackHandler,ToastAndroid,currentScene } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './components/StorePage'
import Shop from './components/App-xl1';
import Details from './components/Details'
import Login from './src/common/Login'
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register'
import Person from './components/Person';
console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
let [isLogin,setLogin]=useState(false);
let [isInstall,setInstall]=useState(true);
	let now = 0;
let init=()=>{
	//AsyncStorage.clear();
	AsyncStorage.getItem('isInstall')
	.then(res=>{
		if(res){
			setInstall(false)
		}
	})
	AsyncStorage.getItem('user')
    .then(res=>{
      let user=JSON.parse(res)
      if(!user){
        SplashScreen.hide();
      }
      if(user&&user.token){
        setLogin(true);
        SplashScreen.hide();
      }
	})
	AsyncStorage.getItem('userreg')
	.then(res=>{
		console.log(res)
	})
}

useEffect(()=>{
	init();
  },[])
  let afterInstall=()=>{
	  console.log('after install')
	  setInstall(false)
  }
  if(isInstall){
	return <View style={{flex:1}}>
		<SwiperPage afterInstall={afterInstall} />
	</View>
  }
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
				<Scene key='root'>
					<Tabs key='tabbar' hideNavBar activeTintColor='red' inactiveTintColor="gray">
					<Scene key='homes' title='首页' hideNavBar icon={({focused})=><Icon name='home' color={focused?'red':'gray'}/>}>
						<Scene key='home' component={Home}/>
					</Scene>
					<Scene key='shop' title='商品分类' hideNavBar icon={({focused})=><Icon name='appstore' color={focused?'red':'gray'}/>}>
						<Scene key='shop' component={Shop}/>
					</Scene>
					<Scene key='per' title='个人中心' hideNavBar icon={({focused})=><Icon name='user' color={focused?'red':'gray'}/>}>
						<Scene key='person' component={Person}/>
         			 </Scene>
					</Tabs>
					<Scene key='detail' hideNavBar component={Details}/> 
				</Scene>
					</Drawer>
				</Lightbox>
        <Scene key='login' initial={!isLogin} component={Login}/>
		<Scene key='reg' component={Register} />
			</Modal>
			</Overlay>
		</Router>
	);
};
export default App;