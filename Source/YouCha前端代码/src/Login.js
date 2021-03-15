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
import { Actions } from 'react-native-router-flux';
import {myFetch} from "./utils";
import Icon from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('window');
const s = width / 640;
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
        }
    }
	userhandle =(text)=>{
        this.setState({
			username:text
        })
    }
	pwdhandle =(text)=>{
        this.setState({
            pwd:text
        })
    }
	login =()=>{
            if(this.state.username&&this.state.pwd){
                myFetch.post('/login',{
                    email:this.state.email,
                    upass:this.state.pwd
                }).then(
                    res=>{
                        if(res.code == 0){
                            this.setState({
                                isloading:true
                            })
                            console.log(res)
                            AsyncStorageStatic.setItem('isLogin','true')
							Actions.lightbox()
                            AsyncStorage.setItem('user',JSON.stringify(res.data))
                            .then(()=>{
                                ToastAndroid.show(res.msg,ToastAndroid.SHORT)
                                Actions.lightbox()
                            })
                        }
						else{
                            this.setState({
                                isloading:false
                            })
                            ToastAndroid.show(res.msg,ToastAndroid.SHORT)
                        }
                    }
            
            else{
                ToastAndroid.showWithGravityAndOffset(
                    '输入不能为空',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
                0,-250)
            }
        }
    
	render() {
        return (
            <View>
			<StatusBar
				// translucent={true}
				backgroundColor="#FFC809"
				barStyle="light-content"
			/>
			<ImageBackground
				style={{
					width: width,
					height: height,
					transform: [{ scale: 1 }],
					flexDirection: "row",
					// alignItems:"center",					
					justifyContent: "center"
				}}
				resizeMode="cover" source={require('../img/1.png')}
			>
				<View style={{
					height: 0.8 * width,
					width: 0.8 * width,
					borderRadius: 0.05 * width,
					backgroundColor: "rgba(255,255,255,0.05)",
					marginTop: 0.65 * width,
					flexDirection: "column",
					alignItems: "center",
					borderWidth: 0.5,

				}}
				>
					<View style={[styles.box,{marginTop:0.2 * width}]}>
						<Icon style={styles.icon} name='user' />
						<TextInput
						   onChangeText={this.userhandle}
							style={styles.input}
							placeholder="请输入账号"
						/>
					</View>
					<View style={[styles.box,{marginTop:0.02 * width}]}>
						<Icon style={styles.icon} name='lock' />
						<TextInput
							style={styles.input}
							maxLength={14}
                            placeholder="密码" 
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true} 
						/>
					</View>
					<TouchableOpacity style={{
						width: 0.58 * width,
						height: 0.1 * width,
						borderRadius: 0.05 * width,
						flexDirection: "column",
						alignItems: "center",
						justifyContent:"center",
						borderWidth: 0.5,
						backgroundColor:"#FFC809",
						marginTop:0.06 * width
					}}
					onPress={() => Actions.lightbox()}
					>
						<Text style={{fontSize:18*s,color:"white"}}>登  录</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{
						width: 0.58 * width,
						height: 0.1 * width,
						borderRadius: 0.05 * width,
						flexDirection: "column",
						alignItems: "center",
						justifyContent:"center",
						borderWidth: 0.5,
						marginTop:0.04 * width
					}} 
					onPress={() => Actions.register()}
					>
						<Text style={{fontSize:18*s,color:"black"}}>注   册</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
    }
}
const styles = StyleSheet.create({
	box: {
		height: 0.12 * width,
		width: 0.7 * width,
		// backgroundColor: "red",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	icon: {
		height: 0.1 * width,
		width: 0.1 * width,
		fontSize: 0.1 * width
	},
	input: {
		height: 0.1 * width,
		width: 0.44 * width,
		borderBottomColor: "black",
		borderBottomWidth: 1
	}
})
