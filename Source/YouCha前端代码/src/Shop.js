import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    FlatList,
    Alert,
    Image

} from 'react-native';
import { WingBlank } from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import { myFetch } from "./utils"
import Icon1 from 'react-native-vector-icons/Feather'
const { width, scale, height } = Dimensions.get('window');
const s = width / 640;
export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            bool: true,
            all: 0,
            lists: [],
        }
    }
    delUplist(list) {
        myFetch.post('/sCart/deleteSCartBySId`', {
            sIds: list
        }).then(res => {
            console.log(res)
            console.log("删除")
        }).catch(function (err) {
            console.log(err);
        })
    }
    del = () => {
        Alert.alert('提示', '确定要删除吗？',
            [
                {
                    text: "确定", onPress: () => {
                        if (this.state.lists[0]) {
                            const data = [...this.state.lists];
                            const uplist = [];
                            const uplist1 = [];
                            data.map((item) => {
                                if (!item.status) {
                                    uplist.push(item.drinkId)
                                }
                                else {
                                    uplist1.push(item)
                                }
                            })
                            if (uplist.length != 0) {
                                this.setState({
                                    lists: uplist1,
                                })
                                ToastAndroid.showWithGravityAndOffset(
                                    '删除成功！',
                                    ToastAndroid.SHORT,
                                    ToastAndroid.BOTTOM,
                                    25, 100)
                                this.delUplist(uplist)
                            }

                            else {
                                ToastAndroid.showWithGravityAndOffset(
                                    '请先选中再删除',
                                    ToastAndroid.SHORT,
                                    ToastAndroid.BOTTOM,
                                    25, 100)
                            }


                        }


                    }
                },
                { text: "返回", onPress: this.opntion2Selected },
            ]
        )

    }
    check = (checked, id) => {
        const data = [...this.state.lists]
        const uplist = [];
        data.map((item) => {
            if (item.drinkId == id) {
                item.status = !item.status
            }
        })
        this.setState({
            lists: data,

        })
    }
    cut = (id) => {
        const data = [...this.state.lists]
        data.map((item) => {
            if (item.drinkId == id) {
                if (item.num == 1) {
                    item.num = 1
                }
                else {
                    item.num = item.num - 1
                }
            }

        })
        this.setState({
            lists: data
        })
    }
    add = (id) => {
        const data = [...this.state.lists]
        data.map((item) => {
            if (item.drinkId == id) {
                item.num = item.num + 1
            }
        })
        this.setState({
            lists: data
        })
    }
    componentDidMount() {
        myFetch.get('/sCart/getSCartByUserId', {
            userId:this.props.userId,
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

    render() {
        return (
            <View>
                <View style={styles.navbar}>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: 0.9 * width,
                        height: 0.85 * height,
                        marginBottom: 0.18 * width,
                        position: "absolute",
                        top: 0.08 * width,
                        left: 0.05 * width,
                        borderRadius: 30,
                        borderWidth: 0.8,
                        borderColor: "#BBBBBB"
                    }}
                    ListHeaderComponent={
                        <View style={{
                            width: 0.9 * width,
                            height: 0.09 * width,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "white",
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                            fontSize: 18 * s
                        }}>
                            <Text style={{
                                marginLeft: 0.04 * width,
                                fontSize: 18 * s,
                            }}>饮品明细</Text>
                            <Text onPress={this.del} style={{
                                marginRight: 0.04 * width,
                                fontSize: 20 * s,
                            }}>删 除</Text>
                        </View>
                    }
                    data={this.state.lists}
                    numColumns={1}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                width: 0.98 * width,
                                height: 0.18 * width,
                                backgroundColor: "#ffff",
                                borderTopWidth: 0.8,
                                borderColor: "#BBBBBB",
                                flexDirection: "row",
                                alignItems: "center"
                            }
                            }><Icon name={item.status ? "circle" : 'check-circle'} style={{ color: "#BBBBBB", fontSize: 30 * s, marginLeft: 20 * s }} onPress={checked => this.check(checked, item.drinkId)} />
                                <Image style={{
                                    width: 0.25 * width,
                                    height: 0.14 * width,
                                    backgroundColor: "pink",
                                    marginLeft: 0.04 * width,

                                }}></Image>
                                <View style={{
                                    marginLeft: 0.03 * width,
                                    width: 0.4 * width,
                                    height: 0.12 * width,
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    // backgroundColor:"pink"

                                }}>
                                    <Text style={{
                                        fontSize: 18 * s,
                                        fontWeight: "bold"
                                    }}>太妃臻香奶茶</Text>
                                    <Text style={{
                                        fontSize: 16 * s,
                                        color: "#AEABAB"
                                    }}>{item.sBrix}/{item.sExtra}/{item.sTemp}/{item.sSize}</Text>
                                    <Text style={{
                                        fontSize: 18 * s,
                                        color: "#F40F0F"
                                    }}>￥19.00</Text>
                                </View>

                                <View style={{
                                    position: "absolute",
                                    right: 80 * s,
                                    top: 70 * s,
                                    width: 0.15 * width,
                                    height: 0.06 * width,
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <Icon style={{
                                        fontSize: 30 * s
                                    }} name="minus-circle" onPress={this.cut.bind(this, item.drinkId)} />
                                    <Text style={{
                                        fontSize: 20 * s
                                    }}>{item.num}</Text>
                                    <Icon style={{
                                        fontSize: 30 * s
                                    }} name="plus-circle" onPress={this.add.bind(this, item.drinkId)} />
                                </View>

                            </View>
                        )

                    }
                    }
                />
                <View style={{
                    width: 0.9 * width,
                    height: 0.09 * width,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    position: "absolute",
                    top: 0.08 * width + 0.85 * height - 0.09 * width,
                    left: 0.05 * width,
                    borderLeftWidth: 0.8,
                    borderRightWidth: 0.8,
                    borderColor: "#BBBBBB",
                    borderBottomWidth: 0.8
                }}>
                    <Text style={{
                        marginLeft: 0.04 * width,
                        fontSize: 18 * s
                    }}>合计￥0</Text>
                    <TouchableOpacity style={{
                        width: 0.15 * width,
                        height: 0.06 * width,
                        backgroundColor: "#F40F0F",
                        borderRadius: 10,
                        marginRight: 20
                    }}>
                        <Text style={{
                            color: "white",
                            textAlign: "center",
                            lineHeight: 25
                        }} onPress={() => Actions.txt({ data: this.state.lists })}>去结算</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
        width: width,
        height: 125 * s,
        backgroundColor: '#FFBF2D',
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
        color: '#fff',
        fontSize: 28,
    },

})