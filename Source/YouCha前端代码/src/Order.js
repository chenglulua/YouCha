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
    TouchableWithoutFeedback,
    Touchable,
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import moment from 'moment'
import { Actions } from 'react-native-router-flux';
import {myFetch} from "./utils";
import { Carousel, WingBlank, Tabs } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const s = width / 640;
export default class Order extends Component {
    constructor() {
        super();
        this.state = {
            bool: true,
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
                status:true,
            }, [
            {
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
            },
            {
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
            },]]
        }
    }
    componentDidMount() {
        myFetch.get('/youcha/order/getOrderByUserIdAndStatus', {
            userId: this.props.userId,
            status:1
        }).then(res => {
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
    make = () => {
        myFetch.get('/youcha/order/getOrderByUserIdAndStatus', {
            userId: this.props.userId,
            status:0
        }).then(res => {
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

        // this.setState({
        //     bool: true,
        //     lists: [{
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     },
            
        //     [{
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     }, {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     },
        // ],
        // ]
        // })
    }
    done = () => {
        myFetch.get('/youcha/order/getOrderByUserIdAndStatus', {
            userId: this.props.userId,
            status:1
        }).then(res => {
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

        // this.setState({
        //     bool: false,
        //     lists: [ 
        //         [{
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     }, {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     },
        //     {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     }
        // ],
        //     {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     },  
        //     [{
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     }, {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     },
        // ],
        //     {
        //         orderId: "999999",
        //         oId: "0000",
        //         userId: "0000",
        //         time: "2021-01-01 17:32:45",
        //         drinkId: "0000",
        //         assId: "0000",
        //         oBrix: "无糖",
        //         oTemp: "珍珠",
        //         oExtra: "布丁",
        //         oSize: "大杯",
        //         num: "1",
        //         tPrice: "11",
        //         code: "04008",
        //         status: true,
        //     }],
            
        // })
    }
    render() {
        return (
            <View>
                <View style={{
                    height: 0.09 * width,
                    // backgroundColor:"pink",
                    width: 0.98 * width,
                    marginLeft: 0.01 * width,
                    flexDirection: "row"


                }}>
                    <TouchableOpacity style={this.state.bool ? styles.btn1 : styles.btn}
                        onPress={this.make}
                    >
                        <Text style={this.state.bool ? styles.txt1 : styles.txt}>制 作 中</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.bool ? styles.btn : styles.btn1}
                        onPress={this.done}
                    >
                        <Text style={this.state.bool ? styles.txt : styles.txt1}>已 完 成</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    { this.state.bool?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: 0.98 * width,
                        marginLeft: 0.01 * width,
                        marginBottom: 0.1 * width,
                    }}
                    data={this.state.lists}
                    numColumns={1}
                    renderItem={({item}) => {
                        // if (item.status || item[0].status) {
                            if (!item.length) {
                                return (
                                    <TouchableWithoutFeedback onPress={()=>Actions.make({data:item})}>
                                    <View style={{
                                        width: 0.98 * width,
                                        height: 0.33 * width,
                                        backgroundColor: "#FBF2F2",
                                        // backgroundColor:"blue",
                                        marginTop: 0.02 * width
                                    }}>
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.09 * width,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <Text style={{
                                                marginLeft: 0.04 * width,
                                                fontSize: 20 * s
                                            }}>优茶（河北师范大学店）</Text>
                                            <Text style={{
                                                marginRight: 0.04 * width,
                                                fontSize: 20 * s,
                                                color: "#AEABAB"
                                            }}>制作中</Text>
                                        </View>
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.18 * width,
                                            backgroundColor: "#F7F3F3",
                                            flexDirection: "row",
                                            alignItems: "center"
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
                                                marginBottom: 0.1 * width
                                            }}>x{item.num}</Text>
                                        </View>
                                       
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.05 * width,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }
                                        }>
                                            <Text style={{
                                                marginLeft: 0.04 * width,
                                                fontSize: 16 * s,
                                                color: "#AEABAB"
                                            }}>{item.time}</Text>
                                            <Text style={{
                                                marginRight: 0.04 * width,
                                                fontSize: 16 * s,
                                            }}>共计{item.num}件商品，共计 {item.tPrice}元</Text>
                                        </View>
                                    </View>
                                    </TouchableWithoutFeedback>
                                )
                            }
                            else {
                                return (
                                    <TouchableWithoutFeedback onPress={()=>Actions.make({data:item})}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        style={{
                                            width: 0.98 * width,
                                            marginLeft: 0.01 * width,
                                            marginTop: 0.02 * width,
                                            backgroundColor: "#FBF2F2",
                                        }}
                                        ListHeaderComponent={
                                            <View style={{
                                                width: 0.98 * width,
                                                height: 0.09 * width,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Text style={{
                                                    marginLeft: 0.04 * width,
                                                    fontSize: 20 * s
                                                }}>优茶（河北师范大学店）</Text>
                                                <Text style={{
                                                    marginRight: 0.04 * width,
                                                    fontSize: 20 * s,
                                                    color: "#AEABAB"
                                                }}>制作中</Text>
                                            </View>
                                        }
                                        ListFooterComponent={
                                            <View style={{
                                                width: 0.98 * width,
                                                height: 0.05 * width,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }
                                            }>
                                                <Text style={{
                                                    marginLeft: 0.04 * width,
                                                    fontSize: 16 * s,
                                                    color: "#AEABAB"
                                                }}>{item[0].time}</Text>
                                                <Text style={{
                                                    marginRight: 0.04 * width,
                                                    fontSize: 16 * s,
                                                }}>共计{item.length}件商品，共计 元</Text>
                                            </View>
                                        }
                                        data={item}
                                        numColumns={1}
                                        renderItem={({item0,index}) => {
                                            return(
                                                    <View style={{
                                                        width: 0.98 * width,
                                                        height: 0.18 * width,
                                                        backgroundColor: "#F7F3F3",
                                                        flexDirection: "row",
                                                        alignItems: "center"
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
                                                            }}>{item[index].oBrix}/{item[index].oExtra}/{item[index].oTemp}/{item[index].oSize}</Text>
                                                        </View>
                                                        <Text style={{
                                                            marginBottom: 0.1 * width
                                                        }}>x{item[index].num}</Text>
                                                    </View>
                                                 )
                                        }
                                        } />
                                        </TouchableWithoutFeedback>
                                )
                            }
                    }
                    } />:
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: 0.98 * width,
                        marginLeft: 0.01 * width,
                        marginBottom: 0.1 * width,
                    }}
                    data={this.state.lists}
                    numColumns={1}
                    renderItem={({item}) => {
                        // if (item.status || item[0].status) {
                            if (!item.length) {
                                return (
                                    <TouchableWithoutFeedback onPress={()=>Actions.done({data:item})}>
                                    <View style={{
                                        width: 0.98 * width,
                                        height: 0.33 * width,
                                        backgroundColor: "#FBF2F2",
                                        // backgroundColor:"blue",
                                        marginTop: 0.02 * width
                                    }}>
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.09 * width,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <Text style={{
                                                marginLeft: 0.04 * width,
                                                fontSize: 20 * s
                                            }}>优茶（河北师范大学店）</Text>
                                            <Text style={{
                                                marginRight: 0.04 * width,
                                                fontSize: 20 * s,
                                                color: "#AEABAB"
                                            }}>已完成</Text>
                                        </View>
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.18 * width,
                                            backgroundColor: "#F7F3F3",
                                            flexDirection: "row",
                                            alignItems: "center"
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
                                                marginBottom: 0.1 * width
                                            }}>x{item.num}</Text>
                                        </View>
                                       
                                        <View style={{
                                            width: 0.98 * width,
                                            height: 0.05 * width,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }
                                        }>
                                            <Text style={{
                                                position:"absolute",
                                                right:0.04 * width,
                                                bottom:0.09 * width,
                                                fontSize:22*s,
                                                color:"#FFC809"
                                            }}>待评价</Text>
                                            <Text style={{
                                                marginLeft: 0.04 * width,
                                                fontSize: 16 * s,
                                                color: "#AEABAB"
                                            }}>{item.time}</Text>
                                            <Text style={{
                                                marginRight: 0.04 * width,
                                                fontSize: 16 * s,
                                            }}>共计{item.num}件商品，共计 {item.tPrice}元</Text>
                                        </View>
                                    </View>
                                     </TouchableWithoutFeedback>
                                )
                            }
                            else {
                                return (
                                    <TouchableWithoutFeedback onPress={()=>Actions.done({data:item})}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        style={{
                                            width: 0.98 * width,
                                            marginLeft: 0.01 * width,
                                            marginTop: 0.02 * width,
                                            backgroundColor: "#FBF2F2",
                                        }}
                                        ListHeaderComponent={
                                            <View style={{
                                                width: 0.98 * width,
                                                height: 0.09 * width,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Text style={{
                                                    marginLeft: 0.04 * width,
                                                    fontSize: 20 * s
                                                }}>优茶（河北师范大学店）</Text>
                                                <Text style={{
                                                    marginRight: 0.04 * width,
                                                    fontSize: 20 * s,
                                                    color: "#AEABAB"
                                                }}>已完成</Text>
                                            </View>
                                        }
                                        ListFooterComponent={
                                            <View style={{
                                                width: 0.98 * width,
                                                height: 0.05 * width,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }
                                            }>
                                            <Text style={{
                                                position:"absolute",
                                                right:0.04 * width,
                                                bottom:0.09 * width,
                                                fontSize:22*s,
                                                color:"#FFC809"
                                            }}>待评价</Text>
                                                <Text style={{
                                                    marginLeft: 0.04 * width,
                                                    fontSize: 16 * s,
                                                    color: "#AEABAB"
                                                }}>{item[0].time}</Text>
                                                <Text style={{
                                                    marginRight: 0.04 * width,
                                                    fontSize: 16 * s,
                                                }}>共计{item.length}件商品，共计 元</Text>
                                            </View>
                                        }
                                        // data={item}
                                        numColumns={1}
                                        renderItem={({item0,index}) => {
                                            return(
                                                    <View style={{
                                                        width: 0.98 * width,
                                                        height: 0.18 * width,
                                                        backgroundColor: "#F7F3F3",
                                                        flexDirection: "row",
                                                        alignItems: "center"
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
                                                            }}>{item[index].oBrix}/{item[index].oExtra}/{item[index].oTemp}/{item[index].oSize}</Text>
                                                        </View>
                                                        <Text style={{
                                                            marginBottom: 0.1 * width
                                                        }}>x{item[index].num}</Text>
                                                    </View>
                                                 )
                                        }
                                        } />
                                    </TouchableWithoutFeedback>
                                )
                            }
                        // }
                        // else {
                        //     return(
                        //         <Text>ddd</Text>
                        //     )
                        // }
                    }
                    } />}
           </ScrollView>
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
    },
    btn: {
        width: 0.49 * width,
        height: 0.09 * width,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"white",
        borderWidth: 1,
        borderColor: "#AEABAB"
    },
    btn1: {
        width: 0.49 * width,
        height: 0.09 * width,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC809",
        borderWidth: 1,
        borderColor: "#AEABAB"
    },
    txt: {
        fontSize: 20 * s,
        color: "black"
    },
    txt1: {
        fontSize: 20 * s,
        color: "white"
    }
})
