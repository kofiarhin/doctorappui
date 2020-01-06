import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

class App extends Component {



    render() {

        return <ScrollView>
            <View style={styles.container}>

                {/* header */}
                <View style={styles.headerWrapper}>
                    <FontAwesome name="reorder" size={20} style={styles.icon} />
                    <FontAwesome name="calendar" size={20} style={styles.icon} />
                </View>

                {/* intro */}
                <View style={styles.introWrapper}>

                    <Text style={[styles.text, { fontSize: 20, marginBottom: 10 }]}> Welcome Back! </Text>
                    <Text style={[styles.text, { fontSize: 40 }]}> Dr. Peterson</Text>

                </View>

                {/* request wrapper */}
                <View style={styles.request}>

                    <View style={styles.requestHeader}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                            <Text style={[styles.text, styles.textLight, { fontSize: 20 }]}> Appointment Request </Text>
                            <Feather name="more-vertical" style={[styles.textLight, { fontSize: 20 }]} />
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name="ios-timer" style={{ fontSize: 30, color: "white", marginRight: 20 }} />
                            <Text style={[styles.text, { color: "white" }]}> 12 Jan 2020, 8am - 10am </Text>

                        </View>
                    </View>

                    {/*  user detaisl */}
                    <View>
                        {/* user */}
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
                            {/* avatar */}
                            <View style={{ marginRight: 20, flexDirection: "row", alignItems: "center" }}>

                                {/* avatar */}
                                <View style={{ marginRight: 20 }}>

                                    <Image source={{ uri: "https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg" }} style={styles.avatar} />
                                </View>
                                {/* content */}
                                <View>
                                    <Text style={[styles.text]}> Louis </Text>
                                    <Text style={styles.textSmall}> Peterson </Text>

                                </View>
                            </View>

                            {/* icon */}

                            <Entypo name="info" size={25} />

                        </View>

                        {/* cta */}
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity style={[styles.btn, styles.btnAccept]}>
                                <Text style={styles.btnText}> Accept</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.btn, styles.btnDecline]}>
                                <Text style={[styles.btnText, styles.btnDark]}> Decline</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/*  list of appointments */}

                    <View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20 }}> Next appointments</Text>
                        </View>


                        {/* list of users */}
                        <View style={styles.userWrapper}>


                            {/*  user unit */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 20
                            }}>

                                {/* avatar */}
                                <View style={{
                                    marginRight: 20
                                }}>
                                    <Image source={{ uri: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg" }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                </View>

                                <View style={styles.userContent}>
                                    <Text style={{
                                        fontSize: 20,
                                        marginBottom: 8
                                    }}> Dorothy Nelson </Text>
                                    <Text> 09, Jan 2020, 11am - 2pm </Text>
                                </View>
                            </View>
                            {/*  end of user unit */}


                            {/*  user unit */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 20
                            }}>

                                {/* avatar */}
                                <View style={{
                                    marginRight: 20
                                }}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/women/8.jpg" }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                </View>

                                <View style={styles.userContent}>
                                    <Text style={{
                                        fontSize: 20,
                                        marginBottom: 8
                                    }}> Dorothy Nelson </Text>
                                    <Text> 09, Jan 2020, 11am - 2pm </Text>
                                </View>

                            </View>
                            {/*  end user unit */}


                            {/*  user unit */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 20
                            }}>

                                {/* avatar */}
                                <View style={{
                                    marginRight: 20
                                }}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/women/8.jpg" }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                </View>

                                <View style={styles.userContent}>
                                    <Text style={{
                                        fontSize: 20,
                                        marginBottom: 8
                                    }}> Dorothy Nelson </Text>
                                    <Text> 09, Jan 2020, 11am - 2pm </Text>
                                </View>

                            </View>
                            {/*  end user unit */}


                            {/*  user unit */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}>

                                {/* avatar */}
                                <View style={{
                                    marginRight: 20
                                }}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/women/8.jpg" }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                </View>

                                <View style={styles.userContent}>
                                    <Text style={{
                                        fontSize: 20,
                                        marginBottom: 8
                                    }}> Dorothy Nelson </Text>
                                    <Text> 09, Jan 2020, 11am - 2pm </Text>
                                </View>

                            </View>
                            {/*  end user unit */}



                            {/*  user unit */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 20
                            }}>

                                {/* avatar */}
                                <View style={{
                                    marginRight: 20
                                }}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/women/8.jpg" }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                </View>

                                <View style={styles.userContent}>
                                    <Text style={{
                                        fontSize: 20,
                                        marginBottom: 8
                                    }}> Dorothy Nelson </Text>
                                    <Text> 09, Jan 2020, 11am - 2pm </Text>
                                </View>

                            </View>
                            {/*  end user unit */}










                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    }
}


export default App;