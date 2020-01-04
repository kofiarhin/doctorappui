import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";

const user = "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg";

const user2 = "https://randomuser.me/api/portraits/men/80.jpg";

class Landing extends Component {

    render() {

        return <ScrollView>

            <View style={styles.container}>

                {/* header details */}

                <View style={styles.headerWrapper}>
                    <Icon name="navicon" style={styles.headerIcon} />
                    <Icon name="calendar-o" style={styles.headerIcon} />

                </View>

                {/* info details */}
                <View style={styles.infoWrapper}>
                    <Text style={styles.intro}> Welcome Back! </Text>
                    <Text style={styles.name}> Dr. Peterson</Text>
                </View>


                {/* request details */}
                <View style={styles.requestWrapper}>

                    <View style={styles.requestContent}>

                        <Text style={{
                            color: "rgba(255,255,255, 0.8)",
                            fontSize: 18,
                            marginBottom: 10
                        }}> Appintment Request </Text>

                        <Text style={{
                            color: "rgba(255,255,255, 0.8)",
                            fontSize: 20
                        }}>
                            <Ionicon name="ios-timer" style={{
                                fontSize: 30
                            }} /> <Text> 3 Jan 2020, 8am - 10am</Text>
                        </Text>
                    </View>


                </View>

                {/* user request details */}

                <View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20
                    }}>
                        <Image source={{ uri: user }} style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            marginRight: 20
                        }} />

                        <View>
                            <Text style={{
                                fontSize: 20
                            }}> Louis</Text>
                            <Text style={{
                                fontSize: 20
                            }}> Peterson</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>

                        <TouchableOpacity style={[styles.btn, styles.btnAccept]}>
                            <Text style={styles.btnText}> Accept </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn, styles.btnDanger]}>
                            <Text style={styles.btnText}> Decline</Text>
                        </TouchableOpacity>


                    </View>

                </View>

                {/* other request details */}

                <View style={{
                    marginTop: 20
                }}>

                    <Text style={styles.subTitle}> Next Appointments </Text>

                    <View style={styles.userUnitWrapper}>

                        <View style={styles.userUnit}>
                            <Image source={{ uri: user }} style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50
                            }} />
                            <View>
                                <Text style={styles.userName}> Carl Pope</Text>
                                <Text style={styles.date}> 09 Jan 2020, 8am - 10am</Text>
                            </View>
                        </View>

                        <View style={styles.userUnit}>
                            <Image source={{ uri: user }} style={{
                                width: 100,
                                height: 100
                            }} />
                            <View>
                                <Text> Carl Pope</Text>
                                <Text> 09 Jan 2020, 8am - 10am</Text>
                            </View>
                        </View>

                        <View style={styles.userUnit}>
                            <Image source={{ uri: user }} style={{
                                width: 100,
                                height: 100
                            }} />
                            <View>
                                <Text> Carl Pope</Text>
                                <Text> 09 Jan 2020, 8am - 10am</Text>
                            </View>
                        </View>

                        <View style={styles.userUnit}>
                            <Image source={{ uri: user2 }} style={{
                                width: 100,
                                height: 100
                            }} />
                            <View>
                                <Text> Carl Pope</Text>
                                <Text> 09 Jan 2020, 8am - 10am</Text>
                            </View>
                        </View>

                    </View>
                </View>

            </View>

        </ScrollView>
    }
}

export default Landing;

