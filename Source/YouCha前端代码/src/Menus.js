import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    ToastAndroid,
    AsyncStorageStatic,
    Button,
    ImageBase,
    ImageBackground
} from 'react-native'
import { WingBlank, Carousel } from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import {myFetch} from "./utils";
import Icon1 from 'react-native-vector-icons/Feather'
const { width, scale, height } = Dimensions.get('window');
const s = width / 640;
export default class Menus extends Component {
    constructor() {
        super();
        this.state = {
            list: ["噗呲鲜果气人", "噗呲鲜果气人","噗呲鲜果气人", "噗呲鲜果气人","噗呲鲜果气人", "噗呲鲜果气人","噗呲鲜果气人"],
            lists: [1, 2, 1, 1, 1, 1, 1],
            bool: false,
            arr:[]
        }
    }
    componentDidMount(){
        myFetch.get('/youcha/drink/getAllDrink').then(res => {
            const data = res
            data.map((item) => {
                item.status = true
            })
            this.setState({
                lists: data
            })
        }).catch(function (err) {
            console.log(err);
        })

    }  
    check = () => {
        this.setState({
            bool: true
        })
    }
    out = () => {
        this.setState({
            bool: false
        })
    }
    scroll=(num)=>{
        this.myScrollView.scrollTo({ x: 0, y: this.state.arr[num], animated: true})
    }
    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <Text style={styles.title}>优 茶</Text>
                </View>
                <View style={styles.navbar1}>
                    <View style={{
                        flexDirection: "column"
                    }}>
                        <Text style={{
                            fontSize: 22 * s,
                            marginTop: 0.01 * width,
                            marginBottom: 0.01 * width
                        }}>石家庄优茶店</Text>
                        <Text style={{
                            fontSize: 18 * s,
                            color: "#BFBCBC"
                        }}
                        >温暖你美好生活</Text>
                    </View>
                    <Icon1
                        style={styles.icon}
                        name='chevron-right'
                    />
                    <View style={{
                        flexDirection: "row",
                        // marginTop:0.01 * width,
                    }}>
                        <Text style={{
                            width: 65 * s,
                            height: 65 * s,
                            backgroundColor: "#FFC809",
                            textAlign: "center",
                            color: "white",
                            textAlignVertical: "center"
                        }}>距离您</Text>
                        <Text style={{
                            width: 65 * s,
                            height: 65 * s,

                            textAlign: "center",
                            textAlignVertical: "center"
                        }}
                        >2Km</Text>
                    </View>
                </View>
                <ScrollView style={{
                    width: 0.3 * width,
                    height: 0.8 * height,
                    backgroundColor: "#FFC809",
                    position: "absolute",
                    left: 0,
                    top: 145 * s,

                }}>
                    {this.state.list.map((item,indx) => {
                        return (
                            <TouchableOpacity onPress={this.scroll.bind(this,indx)}>
                            <Text style={{
                                width: 0.3 * width,
                                height: 0.12 * height,
                                textAlignVertical: "center",
                                textAlign: "center",
                                fontSize: 20 * s,
                                backgroundColor: "white",
                                borderTopWidth: 1,
                                borderColor: "#bbbbbb"
                            }} >{item}</Text>
                            </TouchableOpacity>
                        )
                    })}


                </ScrollView>
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

                <ScrollView style={{
                    width: 0.65 * width,
                    height: 0.58 * height,
                    backgroundColor: "pink",
                    position: "absolute",
                    left: 205 * s,
                    top: 145 * s + 0.36 * width,
                }}
                ref={(view) => { this.myScrollView = view; }}
                >
                    {this.state.lists.map((item,index) => {
                        return (
                            <View  onLayout={event=>{this.state.arr[index]= event.nativeEvent.layout.y}}>
                            <View style={{
                                height: 0.26 * width,
                                width: 0.65 * width,
                                backgroundColor: "white",
                                flexDirection: "row",
                                justifyContent: "space-around"

                            }}>
                                <Image style={{
                                    height: 0.24 * width,
                                    width: 0.22 * width,
                                    backgroundColor: "pink",
                                    marginLeft: 10 * s
                                }} source={require("../img/3.png")}></Image>
                                <View style={{
                                    width: 0.4 * width,
                                    height: 0.22 * width,
                                    flexDirection: "column",
                                    marginLeft: 12 * s,
                                    justifyContent: "space-between",

                                }}>
                                    <Text style={{
                                        fontSize: 20 * s,
                                        fontWeight: "bold",
                                        marginTop: 15 * s
                                    }}>太妃臻香奶茶</Text>
                                    <Text style={{
                                        width: 0.38 * width,
                                        height: 0.1 * width,
                                        fontSize: 16 * s,
                                        letterSpacing: 1,
                                        lineHeight: 18,
                                        color: "#AEABAB",
                                        marginTop: 8 * s
                                    }} numberOfLines={2} ellipsizeMode={'tail'}>
                                        {item.details}
                                        {/* 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 */}
                                        </Text>
                                    <View style={{
                                        flexDirection: "row",
                                        width: 0.28 * width,
                                    }}>
                                        <Text style={{
                                            fontSize: 20 * s,
                                            color: "#FFC809"
                                        }}>￥19.00</Text>
                                        <Text style={{
                                            fontSize: 20 * s,
                                            color: "#F40F0F",
                                            width: 100 * s,
                                            textAlign: "center",
                                            backgroundColor: "#FFC809",
                                            color: "white",
                                            marginLeft: 60 * s
                                        }} onPress={this.check}>选择规格</Text>
                                    </View>
                                </View>
                            </View>
                            
                            </View>
                        
                        )
                    })}
                </ScrollView>
                <Modal
                    transparent
                    visible={this.state.bool}
                    // visible={true}

                >
                    <View style={{
                        height: height,
                        width: width,
                        backgroundColor: "rgba(0,0,0,.5)",
                        alignItems: "center",

                    }}>
                        <View style={{
                            height: 1.2 * width,
                            width: 0.84 * width,
                            backgroundColor: "white",
                            marginTop: 120 * s
                        }}>
                            <ImageBackground style={{
                                height: 0.46 * width,
                                width: 0.84 * width,
                            }} source={require("../img/3.png")}>
                                <Icon onPress={this.out} name="x" style={{ fontSize: 40 * s, right: 15 * s, top: 15 * s, position: "absolute" }} />
                                <Text style={{
                                    fontSize: 25 * s,
                                    right: 18 * s, top: 240 * s, position: "absolute",
                                    color: "#FFC809"
                                }}>综合 4.0</Text>
                            </ImageBackground>
                            <View style={{
                                height: 0.08 * width,
                                width: 0.84 * width,
                                // backgroundColor: "pink",
                                flexDirection: "row"
                            }}
                            >
                                <Text style={{
                                    fontSize: 24 * s,
                                    textAlignVertical: "center",
                                    marginLeft: 20 * s
                                }}>太妃臻香奶茶</Text>
                                <Text style={{
                                    fontSize: 30 * s,
                                    color: "#FFC809",
                                    marginLeft: 30 * s
                                }}>★ ★ ★ ★ ★</Text>
                            </View>
                            <Text style={{
                                width: 0.84 * width,
                                height: 0.2 * width,
                                fontSize: 18 * s,
                                letterSpacing: 1,
                                lineHeight: 18,
                                color: "#AEABAB",
                                // backgroundColor: "blue",
                                paddingLeft: 20 * s,
                                paddingRight: 20 * s
                            }} numberOfLines={4} ellipsizeMode={'tail'}>
                                {/* 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 */}
                                {item.details}
                            </Text>


                            <ScrollView style={{
                                width: 0.84 * width,
                                height: 0.28 * width,
                                // backgroundColor: "pink",
                            }}>
                                <Text style={{
                                    fontSize: 20 * s,
                                    marginLeft: 20 * s,
                                   
                                }}>配料</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 * s }}>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>珍珠</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>芋圆</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>红豆</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10 * s }}>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>椰果</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>布丁</Text></TouchableOpacity>
                                </View>
                                <Text style={{
                                    fontSize: 20 * s,
                                    marginLeft: 20 * s,
                                    marginTop: 10 * s
                                }}>糖度</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 * s }}>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>无糖</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>五分糖</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>全糖</Text></TouchableOpacity>
                                </View>
                                <Text style={{
                                    fontSize: 20 * s,
                                    marginLeft: 20 * s,
                                    marginTop: 10 * s
                                }}>温度</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 * s }}>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>冰</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>常温</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>热</Text></TouchableOpacity>
                                </View>
                                <Text style={{
                                    fontSize: 20 * s,
                                    marginLeft: 20 * s,
                                    marginTop: 10 * s
                                }}>规格</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 * s }}>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>中杯</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} ><Text style={{ fontSize: 18 * s, textAlign: "center", textAlignVertical: "center" }}>大杯</Text></TouchableOpacity>
                                </View>
                            </ScrollView>
                            <View style={{
                                 width: 0.84 * width,
                                 height: 0.08 * width,
                                 flexDirection: "row",
                                 justifyContent: "space-between",
                                 backgroundColor:"#F7F7F7"
                            }}>
                                <Text style={{
                                    fontSize:20*s,
                                    marginLeft:20*s,
                                    marginTop:10*s
                                }}>￥19.00</Text>
                            <View style={{
                                width: 0.15 * width,
                                height: 0.08 * width,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginRight:20*s,
                                marginTop:10*s
                            }}>
                                <Icon style={{
                                    fontSize: 30 * s
                                }} name="minus-circle" />
                                <Text style={{
                                    fontSize: 20 * s
                                }}>1</Text>
                                <Icon style={{
                                    fontSize: 30 * s
                                }} name="plus-circle" />
                            </View>
                            </View>
                            <Text style={{
                                 width: 0.84 * width,
                                 height: 0.08 * width,
                                 textAlign: "center",
                                 textAlignVertical:"center",
                                 backgroundColor:"#FFC809",
                                 color:"white",
                                 fontSize:22*s
                            }}>加入购物车</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
        width: width,
        height: 65 * s,
        backgroundColor: 'white',
        // backgroundColor:'white',
        flexDirection: 'row',
        paddingLeft: 0.03 * width,
        paddingTop: '1%',
        paddingRight: 0.03 * width,
        justifyContent: "center",

    },
    navbar1: {
        width: width,
        height: 90 * s,
        // backgroundColor: ,
        flexDirection: 'row',
        paddingLeft: 0.03 * width,
        paddingTop: '1%',
        paddingRight: 0.03 * width,
        justifyContent: "space-between",

    },
    icon: {
        width: 0.08 * width,
        color: 'black',
        fontSize: 26,
        marginRight: 0.45 * width,
        marginTop: 0.01 * width,
    },
    title: {
        marginLeft: 'auto',
        marginRight: "auto",
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        letterSpacing: 3
    },
    wrapper: {
        height: 0.32 * width,
        width: 0.65 * width,
        marginLeft: 205 * s
    },
    img: {
        width: 0.65 * width,
        height: 0.32 * width,
    },
    btn: {
        width: 0.15 * width,
        height: 0.07 * width,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        justifyContent: "center",
        marginLeft: 18 * s
    },

})
