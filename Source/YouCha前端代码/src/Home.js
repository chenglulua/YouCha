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
    Image
} from 'react-native';
import { Carousel, WingBlank } from '@ant-design/react-native';
import {myFetch} from "./utils"
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const s = width / 640;
import Swiper from 'react-native-swiper';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            arr:[]
        }
    }
    componentDidMount(){
        myFetch.get('/youcha/drink/randomDrinks', {
           num:3
        }).then(res => {
            this.setState({
                arr: res
            })
        }).catch(function (err) {
            console.log(err);
        })
    }
    render() {
        return (
            <View>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={0}
                    autoplay={true}
                    infinite={true}
                    autoplayInterval={3000}
                >
                    <Image resizeMode="stretch" source={require("../img/4.png")} style={styles.img} />
                    <Image resizeMode="stretch" source={require("../img/4.png")} style={styles.img} />
                    <Image resizeMode="stretch" source={require("../img/4.png")} style={styles.img} />
                </Carousel>
               
                <View style={{
                    width: 0.9 * width,
                    height: 0.65 * width,
                    backgroundColor: "#FFC809",
                    borderRadius: 0.03 * width,
                    position: "absolute",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    left: 0.05 * width,
                    top: 0.5 * width
                }}>
                    <View style={styles.box}>
                    <Icon name="location-outline" style={styles.icon} />
                        <Text style={{ fontSize: 25 * s ,marginTop: 0.05 * width}}>门店自取</Text>
                        <Text style={{
                                fontSize: 18 * s,
                                borderWidth: 0.5,
                                width: 0.3 * width,
                                textAlign: "center",
                                borderRadius: 5,
                                marginTop: 0.02 * width
                            }}
                        >下单免排队</Text>
                    </View>
                    <View style={styles.box} >
                        <Icon name="location-outline" style={styles.icon} />
                        <Text style={{ fontSize: 25 * s, marginTop: 0.05 * width }}>门店距离您</Text>
                        <Text
                            style={{
                                fontSize: 18 * s,
                                borderWidth: 0.5,
                                width: 0.3 * width,
                                textAlign: "center",
                                borderRadius: 5,
                                marginTop: 0.02 * width
                            }}
                        >1.5KM</Text>
                    </View>
                    <View >
                        <TextInput
                            placeholder="每天一杯优茶"
                            placeholderTextColor="#fff"
                            style={{
                                marginTop: 0.04 * width,
                                width: 0.8 * width,
                                height: 0.09 * width,
                                backgroundColor: "white",
                                borderRadius: 0.03 * width,
                            }}

                        />
                        <Icon name="search" style={styles.icon1} />
                    </View>
                </View>
                <Text style={{
                    fontSize: 22 * s,
                    marginTop: 0.55 * width,
                    marginLeft: 0.05 * width
                }}>每日推荐</Text>
                <WingBlank style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <ImageBackground
                        style={styles.tui}
                        resizeMode='cover' source={require('../img/2.png')}
                    ><View style={styles.bei}
                    ><Text style={{
                        color:"white"
                    }}>飘 香 奶 茶</Text></View>
                    </ImageBackground>
                    <ImageBackground
                        style={styles.tui}
                        resizeMode="cover" source={require('../img/4.png')}
                    ><View style={styles.bei}
                    ><Text style={{
                        color:"white"
                    }}>飘 香 奶 茶</Text></View>
                    </ImageBackground>
                    <ImageBackground
                        style={styles.tui}
                        resizeMode="cover" source={require('../img/3.png')}
                    ><View style={styles.bei}
                    ><Text style={{
                        color:"white"
                    }}>飘 香 奶 茶</Text></View>
                    </ImageBackground>
                    
                </WingBlank>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 0.65 * width,
        width: width,
    },
    img: {
        width: width,
        height: 0.65 * width,
    },
    box: {
        width: 0.35 * width,
        height: 0.4 * width,
        backgroundColor: "white",
        borderRadius: 0.03 * width,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 0.08 * width

    },
    icon: {
        fontSize: 90 * s,
        marginTop: 0.05 * width
    },
    icon1: {
        fontSize: 29 * s,
        position: "absolute",
        left: 0.72 * width,
        top: 0.06 * width

    },
    tui: {
        height: 0.3 * width,
        width: 0.3 * width,
        backgroundColor: "pink",
        marginTop: 0.02 * width,
        borderRadius: 10
    },
    bei:{
        justifyContent:"center",
        flexDirection:"row",
        height: 0.3 * width,
        width: 0.3 * width,
        backgroundColor:"rgba(0,0,0,.3)",
        textAlign:"center",
        alignItems:"center"
    }
})
