import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 90,
        paddingHorizontal: 10,
    },
    titulo: {
        fontFamily: 'Alata-Regular',
        fontSize: 30,
        color: "black",
        marginBottom: 5,
        marginRight: '50px'

    },

    titleRegisterLabel: {
        fontFamily: 'Alata-Regular',
        fontSize: 30,
        color: "#A9ADB7",
        marginBottom: 5,
        marginRight: '50px',
        justifyContent: 'center',
        alignItems: 'center'
    },

    label: {
        fontFamily: 'Alata-Regular',
        fontSize: 16,
        marginBottom: 5,
        alignSelf: "flex-start",
        color: "black",
    },

    input: {
        width: "90%",
        height: 45,
        borderColor: "gray",
        borderWidth: 0,
        marginBottom: 15,
        paddingHorizontal: 10,
    },

    buttonRegisterContainer: {
        position: 'absolute',
        bottom: 20, // ou outra distância que você deseja do rodapé
        width: '100%',
        alignItems: 'center',
    },

    inputRegister: {
        width: "90%",
        fontSize: 16,
        fontFamily: 'Alata-Regular',
        marginBottom: 5,
        color: "#A7A6A5",
        width: "100%",
    },
    buttonRegister: {
        width: "90%",
        backgroundColor: "#5446FF",
        borderRadius: 20,
        fontFamily: "Alata-Regular",
        height: 70,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        bottom: 20,
    },
    buttonRegister: {
        width: "60%",
        backgroundColor: "#5446FF",
        borderRadius: 20,
        fontFamily: "Alata-Regular",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 120,
        position: "relative",
        top: 50,
        bottom: 5,
    },
    footerText: {
        fontSize: 16,
        color: "#A7A6A5",
        fontFamily: "Alata-Regular",
        marginBottom: 50,
    },
    listFormRegister: {
        width: "100%",
    },
    signupContainer: {
        marginTop: 0,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        marginVertical: 20,
    },
    signupRegisterText: {
        fontSize: 16,
        color: "#A7A6A5",
        fontFamily: "Alata-Regular",
    },
    signupLinkRegisterText: {
        color: "#5446FF",
        textDecorationLine: "underline",
        marginLeft: 5,
        fontFamily: "Alata-Regular",
    },
    tipoUsuarioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    tipoUsuarioButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginRight: 5,
    },
    selectedButton: {
        backgroundColor: 'blue',
        borderColor: 'blue',
    },
    tipoUsuarioButtonText: {
        textAlign: 'center',
        color: 'black',
    },
    blueText: {
        color: 'blue'
    },
    TwoOptionCheckbox: {
        lexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 15,
        color: 'black',
    },
});
