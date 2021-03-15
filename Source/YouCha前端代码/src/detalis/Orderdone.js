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
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import moment from 'moment'
import { Actions } from 'react-native-router-flux';
import {myFetch} from "../utils"
import { Carousel, WingBlank, Tabs } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window');
const s = width / 640;
export default class Orderdone extends Component {
    constructor() {
        super();
        this.state = {
            lists: [{
                orderId: "999999",
                oId: "0000",
                userId: "0000",
                time: "2021-01-01 17:32:45",
                drinkId: "0000",
                assId: "0000",
                oBrix: "无糖",
                oTemp: "珍珠",
                oExtra: "布丁",
                oSize: "大杯",
                num: "1",
                tPrice: "11",
                code: "04008",
                status: true,
            }]
        }
    }
    componentDidMount() {
        if (!this.props.data.length) {
            this.setState({
                lists: [this.props.data, ...this.state.lists],
                bool: true
            })
        }
        else {
            this.setState({
                lists: this.props.data,
                bool: false
            })
        }
    }
    render() {
        console.log(this.state.lists);
        const arr = this.state.lists
        return (
            <View>
                <View style={styles.navbar}>
                    <Icon1
                        style={styles.icon}
                        name='chevron-left'
                        onPress={() => Actions.pop()}
                    />
                    <Text style={styles.title}>已完成</Text>
                </View>
                <View style={{
                    width: width,
                    height: height - 65 * s,
                    backgroundColor: "#F2F0F0"
                }}>
                    <Text style={{
                        width: width,
                        fontSize: 22 * s,
                        marginTop: 20 * s,
                        color: "#797676",
                        textAlign: "center",
                        marginBottom:20*s
                    }}>感谢您光临优茶</Text>
                    
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{
                            width: 0.98 * width,
                            marginLeft: 0.01 * width,
                            marginTop: 0.02 * width,
                            marginBottom: 0.18 * width,
                            // backgroundColor: "white",
                        }}
                        ListHeaderComponent={
                            <View style={{
                                width: 0.98 * width,
                                height: 0.09 * width,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor:"white",
                                borderWidth: 1,
                                borderColor: "#BBBBBB"
                            }}>
                                <Text style={{
                                    marginLeft: 0.04 * width,
                                    fontSize: 18 * s,
                                    color: "#FFC809",
                                    fontWeight: "bold"
                                }}>订单号 {arr[0].orderId}</Text>
                            </View>
                        }
                        ListFooterComponent={
                            <View>
                                <View style={{
                                    width: 0.98 * width,
                                    height: 0.05 * width,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderWidth: 1,
                                    backgroundColor: "white",
                                    borderColor: "#BBBBBB"

                                }
                                }>
                                    <Text style={{
                                        marginLeft: 0.04 * width,
                                        fontSize: 18 * s,
                                        // color: "#AEABAB"
                                    }}>共计{arr.length}件商品</Text>
                                    <Text style={{
                                        marginRight: 0.04 * width,
                                        fontSize: 16 * s,
                                    }}>实付 <Text style={{
                                        marginRight: 0.04 * width,
                                        fontSize: 26 * s,
                                    }}>22</Text> 元</Text>

                                </View>
                                <View style={{
                                    width: 0.98 * width,
                                    height: 0.15 * width,
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    // alignItems: "center",
                                    borderWidth: 1,
                                    backgroundColor: "white",

                                    borderColor: "#BBBBBB"
                                }}>
                                    <Text style={{
                                        marginLeft: 0.04 * width,
                                        fontSize: 18 * s,
                                        color: "#AEABAB"

                                    }}>下单时间 {arr[0].time}</Text>
                                    <Text style={{
                                        marginLeft: 0.04 * width,
                                        fontSize: 18 * s,
                                        color: "#AEABAB"

                                    }}>下单时间 {arr[0].time}</Text>
                                </View>
                                <Text style={{
                                    width: 0.98 * width,
                                    height: 0.12 * width,
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    borderWidth: 1,
                                    backgroundColor: "white",
                                    borderColor: "#BBBBBB",
                                    textAlignVertical:"center",
                                   
                                }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您还未对此订单进行评价，点我进行评价
                                </Text>
                                <View style={{
                                    backgroundColor: "white",
                                    borderColor: "#BBBBBB",
                                    borderWidth: 1,
                                    width: width,
                                    marginTop: 0.12 * width,
                                    height: 0.24 * height,
                                    flexDirection:"row",
                                    alignItems:"center",
                                    justifyContent:"space-evenly"

                                }}>
                                    <Text style={{
                                        position:"absolute",
                                        left:30,
                                        top:10
                                    }}>近日新品</Text>
                                    <Image style={{
                                        width: 0.3*width,
                                        height: 0.2*width,
                                    }} source={require('../../img/3.png')}></Image>
                                    <Image  style={{
                                        width: 0.3*width,
                                        height: 0.2*width,
                                    }} source={require('../../img/3.png')}></Image>

                                </View>

                            </View>

                        }
                        data={this.state.lists}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    width: 0.98 * width,
                                    height: 0.18 * width,
                                    backgroundColor: "white",
                                    flexDirection: "row",
                                    alignItems: "center",

                                }
                                }>
                                    <Image style={{
                                        width: 0.25 * width,
                                        height: 0.15 * width,
                                        backgroundColor: "pink",
                                        marginLeft: 0.04 * width,

                                    }}></Image>
                                    <View style={{
                                        marginLeft: 0.03 * width,
                                        width: 0.58 * width,
                                        height: 0.08 * width,
                                        alignItems: "flex-start",
                                        flexDirection: "column"

                                    }}>
                                        <Text style={{
                                            fontSize: 20 * s,
                                            fontWeight: "bold"
                                        }}>太妃臻香奶茶</Text>
                                        <Text style={{
                                            fontSize: 18 * s,
                                            color: "#AEABAB"
                                        }}>{item.oBrix}/{item.oExtra}/{item.oTemp}/{item.oSize}</Text>
                                    </View>
                                    <Text style={{
                                        position: "absolute",
                                        right: 0.2 * width,
                                        bottom: 0.09 * width,
                                        fontSize: 22 * s,
                                        // color:"#FFC809"
                                    }}>x{item.num}</Text>
                                    <Text style={{
                                        position: "absolute",
                                        right: 0.05 * width,
                                        bottom: 0.09 * width,
                                        fontSize: 25 * s,
                                        // color:"#FFC809"
                                    }}>￥{item.tPrice}</Text>
                                </View>
                            )
                        }
                        } />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
        width: width,
        height: 65 * s,
        backgroundColor: '#fff',
        // backgroundColor:'white',
        flexDirection: 'row',
        paddingLeft: 0.03 * width,
        paddingTop: '1%',
        paddingRight: 0.03 * width,
        justifyContent: "center",
        // borderBottomColor:"black",
        // borderBottomWidth:0.5
    },
    icon: {
        width: 0.08 * width,
        color: "black",
        fontSize: 28,
    },
    title: {
        marginLeft: 0.31 * width,
        marginRight: "auto",
        fontSize: 20,
        letterSpacing: 3,
        color: "black"
    },
}
)