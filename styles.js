import { StyleSheet } from "react-native";
const colors = {
    blue: "#2E89FF",
    white: "#ffff",
    danger: "#e32249",
    grey: "#F3F6FF"
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "rgba(0, 0, 0,  0.1)"
    },
    headerWrapper: {

        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40
    },
    headerIcon: {
        fontSize: 30
    },
    infoWrapper: {
        marginBottom: 30
    },
    intro: {
        fontSize: 25,
        color: 'rgba(0, 0, 0, 1.0)'
    },
    name: {
        fontSize: 50,
        fontWeight: "900"
    },
    requestWrapper: {
        backgroundColor: colors.blue,
        padding: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginBottom: 40
    },
    btn: {
        borderRadius: 50,
        padding: 15
    },

    btnText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },

    btnAccept: {
        backgroundColor: colors.blue,
        width: "60%",
    },
    btnDanger: {
        backgroundColor: colors.danger
    },
    userUnitWrapper: {
        marginTop: 30
    },
    userUnit: {
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20
    },
    subTitle: {
        fontSize: 20
    }


});



export default styles;