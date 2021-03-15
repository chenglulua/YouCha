import React, { Component } from 'react'
import {
    View,
	Text,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ToastAndroid
    
} from 'react-native';
import { WingBlank } from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/Feather';
import {myFetch} from "./utils"
import { Actions } from 'react-native-router-flux';
import Icon1 from 'react-native-vector-icons/Feather'
const { width, scale, height } = Dimensions.get('window');
const s = width / 640;
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            pwd0:'',
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
    pwdhandle0 =(text)=>{
        this.setState({
            pwd0:text
        })
    }
    battle=()=>{
        if(this.state.pwd!=this.state.pwd0){
            ToastAndroid.showWithGravityAndOffset(
                '两次输入密码不一致',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            0,-250)
        }
    }
    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <Icon1
                        style={styles.icon}
                        name='chevron-left'
                        onPress={() => Actions.pop()}
                    />
                    <Text style={styles.title}>注册</Text>
                </View>
                <WingBlank style={{
                    flexDirection: "column",
                    alignItems:"center"
                }}>
                <View style={[styles.box,{marginTop:0.1*width}]}>
						<Icon style={styles.icon1} name='smartphone' />
						<TextInput
							style={styles.input}
							placeholder="请输入账号"
                            onChangeText={this.userhandle}
						/>
				</View>
                <View style={[styles.box,{marginTop:0.04*width}]}>
						<Icon style={styles.icon1} name='lock' />
						<TextInput
							style={styles.input}
							placeholder="请输入密码"
                            maxLength={14}
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true} 
						/>
				</View>
                <View style={[styles.box,{marginTop:0.04*width}]}>
						<Icon style={styles.icon1} name='lock' />
						<TextInput
							style={styles.input}
                            maxLength={14}
                            onChangeText={this.pwdhandle0}
                            onEndEditing={this.battle}
                            secureTextEntry={true} 
							placeholder="再输入一次密码"
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
						marginTop:0.1 * width
					}} 
					onPress={() => Actions.pop()}
					>
						<Text style={{fontSize:18*s,color:"white"}}>提  交  </Text>
					</TouchableOpacity>
                </WingBlank>
            </View>
            

        )
    }
}
const styles = StyleSheet.create({
    navbar:{
        width:width,
        height:65*s,
        backgroundColor: '#FFBF2D',
        // backgroundColor:'white',
        flexDirection: 'row',
        paddingLeft:0.03*width,
        paddingTop:'1%',
        paddingRight:0.03*width,
        justifyContent:"center",
        // borderBottomColor:"black",
        // borderBottomWidth:0.5
    },
    icon:{
        width:0.08*width,
        color:'#fff',
        fontSize:28,
    },
    title: {
        marginLeft: 'auto',
        marginRight: "auto",
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 3
    },
    box: {
		height: 0.12 * width,
		width: 0.8 * width,
		// backgroundColor: "red",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	icon1: {
		height: 0.08 * width,
		width: 0.08 * width,
		fontSize: 0.08 * width,
        lineHeight:58*s
	},
	input: {
		height: 0.1 * width,
		width: 0.54 * width,
		borderBottomColor: "black",
		borderBottomWidth: 1
	}
})