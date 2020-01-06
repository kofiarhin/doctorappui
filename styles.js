import { StyleSheet } from "react-native";

const colors = {
    blue: "#308DFF"
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#F3F6FF"
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },
    icon: {
        fontSize: 25,
        color: "rgba(0, 0,0, 0.6)"
    },
    introWrapper: {
        marginBottom: 20
    },
    text: {
        color: "rgba(0, 0, 0, 0.7)",
        fontFamily: "robotoLight"
    },
    request: {
        backgroundColor: "white",
        padding: 10
    },
    requestHeader: {

        backgroundColor: colors.blue,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 30
    },
    textLight: {
        color: "rgba(255, 255, 255, 0.6)",
    },
    textSmall: {
        fontSize: 18,
        marginBottom: 5
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    btnWrapper: {
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between"
    },
    btn: {
        textAlign: "center"
    },
    btnAccept: {
        backgroundColor: colors.blue,
        width: "60%"
    },
    btnDecline: {
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    btn: {
        padding: 20,
        borderRadius: 30
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: 17
    },
    btnDark: {
        color: "black"
    },
    userUnit: {
        flexDirection: "row"
    }
})

export default styles;