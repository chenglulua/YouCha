import React, { Component } from 'react'
import {
	StyleSheet,
	Dimensions,
	useState,
	BackHandler,
	ToastAndroid,
	AsyncStorageStatic,
	View,
	Text,
	ImageBackground,
	TextInput,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import {
	Router,
	Overlay,
	Scene,
	Tabs,
	Lightbox,
	Modal,
	Actions,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import Home from './src/Home'
import Menu from './src/Menus'
import Order from './src/Order'
import Shop from './src/Shop'
import Ours from './src/Our'
import Login from './src/Login'
import Register from './src/Register'
import Orderdone from "./src/detalis/Orderdone"
import Ordermake from "./src/detalis/Ordermake"
import Shoptxt from "./src/detalis/Shoptxt" 
// 172.17.100.2:8081 
const { width, height } = Dimensions.get('window');
const s = width / 640;
const App = () => {
	let now = 0; 
	// Actions.login();
	// let [isInstall,setInstall] = useState(true);
	// let init = () => {
	// 	AsyncStorageStatic.getItem('isInstall')
	// 		.then(res => {
	// 			if (!res) {
	// 				setInstall(false)
	// 			}
	// 		})
	// 		AsyncStorageStatic.getItem('isLogin')
	// 		.then(res => {
	// 			if (res == 'false') {
	// 				// SplashScreen.hide();
	// 				Actions.login();
	// 			} else {
	// 				// SplashScreen.hide();
	// 			}
	// 		})
	// }
	// useEffect(() => {
	// 	init();
	// }, [])
	// let afterInstall = () => {
	// 	console.log('after install')
	// 	setInstall(true)
	// }
	// if (!isInstall) {
	// 	return <View style={{ flex: 1 }}>
	// 		<SwiperPage
	// 			afterInstall={afterInstall}
	// 		/>
	// 	</View>
	// }
	return (
		<Router
				backAndroidHandler={() => {
					if (Actions.currentScene != 'home'
						&& Actions.currentScene != 'shop'
						&& Actions.currentScene != 'menu'
						&& Actions.currentScene != 'order'
						&& Actions.currentScene != 'ours') {
						Actions.pop();
						return true;
					} else {
						if (new Date().getTime() - now < 2000) {
							BackHandler.exitApp();
						} else {
							ToastAndroid.show('确定要退出吗', 100);
							now = new Date().getTime();
							return true;
						}
					}
				}}
			>
				<Overlay>
					<Modal key="modal" hideNavBar>
						<Lightbox key="lightbox">
							<Scene key="root">
								<Tabs
									key='tabbar'
									hideNavBar
									activeTintColor="#FFC809"
									inactiveTintColor="#949494"
									tabBarStyle={{
										backgroundColor: '#fff',
										borderTopColor: 'rgba(204,204,204,0.1)',
										borderTopWidth: 3,
										height: 70 * s,
									}}
								>
									{/* 首页 */}
									<Scene key='home'
										title='首页'
										icon={
											({ focused }) => <Icon
												color={focused ? '#FFC809' : '#949494'}
												name="home"
												size={25}
											/>
										}

									>
										<Scene key='home' hideNavBar={true} component={Home} />
									</Scene>
									{/* 菜单 */}
									<Scene key='menu'
										title='菜单'
										icon={
											({ focused }) => <Icon
												color={focused ? '#FFC809' : '#949494'}
												name="coffee"
												size={25}
											/>
										}
									>
										<Scene key='menu' hideNavBar={true} component={Menu} />
									</Scene>
									{/* 订单 */}
									<Scene key='order'
										title='订单'
										icon={
											({ focused }) => <Icon
												color={focused ? '#FFC809' : '#949494'}
												name="shopping-bag"
												size={25}
											/>
										}
									>
										<Scene key='order' hideNavBar={true} component={Order} />
										<Scene key='make' hideNavBar={true} component={Ordermake} />
										<Scene key='done' hideNavBar={true} component={Orderdone} />

									</Scene>
									{/* 购物车 */}
									<Scene key='shop'
										title='购物车'
										icon={
											({ focused }) => <Icon
												color={focused ? '#FFC809' : '#949494'}
												name="shopping-cart"
												size={25}
											/>
										}
									>
										<Scene key='shop' hideNavBar={true} component={Shop} />
										<Scene key='txt' hideNavBar={true} component={Shoptxt} />
                                      
									</Scene>
									{/* 我的 */}
									<Scene key='ours'
										title='我的'
										icon={
											({ focused }) => <Icon
												color={focused ? '#FFC809' : '#949494'}
												name="user"
												size={25}
											/>
										}
									>
										<Scene key='ours' hideNavBar={true} component={Ours} />
									</Scene>
								</Tabs>
							</Scene>
						</Lightbox>
					 <Scene key='login' component={Login} />
					 <Scene key='register' component={Register} />
					</Modal>
				</Overlay>
			</Router>

	);
};

const styles = StyleSheet.create({
})

export default App;


