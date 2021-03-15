import React, { Component } from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    BackHandler,
    StatusBar,
    ToastAndroid,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import moment from 'moment'
import {myFetch} from "./utils";
import { Carousel, WingBlank } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const s = width / 640;
export default class Our extends Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            arr: [],
            arr1: [],
        }
    }
    componentDidMount() {
        fetch(`http://apis.juhe.cn/simpleWeather/query?city=保定&key=990637a967db0050ae0076d8363d6a79`).then(res => res.json())
            .then(res => {
                console.log(res.result.future)
                this.setState({
                    arr: res.result.realtime,
                    arr1: res.result.future
                });
                console.log(res.result.realtime)
            })
           
            
           
    }

    render() {
        return (
            <View>
                <View style={{
                    width: width,
                    height: 0.6 * width,
                    backgroundColor: "#FFC809",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 30 * s,
                        color: "white",
                        marginTop: 0.12 * width
                    }}>YouCha</Text>
                </View>
                <View style={{
                    width: 0.9 * width,
                    height: 0.58 * width,
                    backgroundColor: "white",
                    borderWidth: 0.5,
                    position: "absolute",
                    left: 0.05 * width,
                    borderRadius: 10,
                    top: 0.3 * width
                }}>
                    <Image resizeMode="cover" source={require('../img/2.png')} style={styles.img}  ></Image>
                    <View style={{
                        marginTop: 0.04 * width,
                        marginLeft: 0.36 * width
                    }}>
                        <Text style={{
                            fontSize: 22 * s
                        }}>YANG</Text>
                        <Text style={{
                            fontSize: 18 * s
                        }}>每天迎接美好生活</Text>
                    </View>
                    <WingBlank style={{
                        marginTop: 0.13 * width,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={styles.box}>
                            <Text style={styles.txt}>2</Text>
                            <Text style={styles.txt1}>制作中</Text></View>
                        <View style={styles.box}>
                            <Text style={styles.txt}>3</Text>
                            <Text style={styles.txt1}>已完成</Text></View>
                        <View style={styles.box}>
                            <Text style={styles.txt}>4</Text>
                            <Text style={styles.txt1}>购物车</Text></View>
                    </WingBlank>
                </View>
                <Text style={{
                    marginTop: 0.32 * width,
                    marginLeft: 0.06 * width,
                    fontSize: 20 * s
                }}>未来五天天气预测</Text>
                <View style={{
                    width: 0.9 * width,
                    height: 0.58 * width,
                    // backgroundColor:"pink",
                    position: "absolute",
                    left: 0.05 * width,
                    borderRadius: 10,
                    top: width,
                    borderWidth: 0.5
                }}>
                    <Text style={{
                        fontSize: 20 * s,
                        marginTop: 0.05 * width,
                        marginLeft: 0.03 * width,
                    }}>{moment().format('YYYY年MM月DD日 HH:mm:ss')} 周{moment().format("d")}</Text>
                    <WingBlank style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 0.05 * width,
                    }}>
                      {
                        this.state.arr1.map((item) => {

                            if(moment().format("MM月DD日")==moment(item.date).format("MM月DD日")){
                                return(
                                    <View style={{
                                        width: 0.25 * width,
                                        height: 0.3 * width,
                                        flexDirection: "column",
                                        backgroundColor: "white",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        borderWidth: 0.5
                                    }}>
                                        <Icon name="location-outline" style={{ fontSize: 0.07 * width, color: "#FFC809", marginTop: 0.04 * width }} />
                                        <View style={{ flexDirection: "row", marginTop: 0.01 * width }}>
                                            <Text style={{ fontSize: 22 * s, lineHeight: 30, paddingRight: 5 }}>{item.temperature.split('/')[0]}</Text>
                                            <View style={{ flexDirection: "column" }}>
                                                <Text style={{ fontSize: 15 * s }}>℃</Text>
                                                <Text style={{ fontSize: 15 * s }}>{item.weather}</Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontSize: 18 * s, marginTop: 0.008 * width }}>{item.temperature}</Text>
                                        <Text style={{ fontSize: 18 * s, marginTop: 0.008 * width }}>{item.direct}</Text>
                                    </View>
                                )
                            }
                            else{
                            return(
                                <View style={{
                                    width: 0.14 * width,
                                    height: 0.3 * width,
                                    flexDirection: "column",
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    borderWidth: 0.5
                                }}>
                                    <Text style={{ fontSize: 15 * s, lineHeight: 30, paddingRight: 5 }}>星期{moment(item.date).format("d")}</Text>
                                    <Text style={{ fontSize: 15 * s, color: "#BFBCBC" }}>{moment(item.date).format("MM月DD日")}</Text>
                                    <Icon name="location-outline" style={{ fontSize: 0.055 * width, color: "#FFC809", marginTop: 0.01 * width }} />
                                    <Text style={{ fontSize: 15 * s, marginTop: 0.008 * width }}>{item.temperature}</Text>
                                    <Text style={{ fontSize: 15 * s, marginTop: 0.008 * width }}>{item.weather}</Text>
                                    <Text style={{ fontSize: 12 * s, marginTop: 0.008 * width }}>{item.direct}</Text>
                                </View>
                            )
                            }
                        })
                        }
                       
                    </WingBlank>
                    <TouchableOpacity style={{
						width: 0.5 * width,
						height: 0.08 * width,
						borderRadius: 0.05 * width,
						flexDirection: "column",
						alignItems: "center",
						justifyContent:"center",
						borderWidth: 0.5,
						backgroundColor:"#FFC809",
						marginTop:0.03 * width,
                        marginLeft:120*s
					}}
					// onPress={() => Actions.lightbox()}
					>
						<Text style={{fontSize:18*s,color:"white"}}>注 销</Text>
					</TouchableOpacity>
                </View>
            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: 0.25 * width,
        height: 0.25 * width,
        borderRadius: 0.25 * width,
        position: "absolute",
        left: 0.08 * width,
        top: -0.08 * width
    },
    box: {
        width: 0.26 * width,
        height: 0.26 * width,
        // backgroundColor:"pink",
        borderWidth: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 20 * s,
        marginBottom: 0.03 * width
    },
    txt1: {
        fontSize: 20 * s,
    }
})