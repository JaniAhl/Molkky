import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    parentView: {
        flex: 1
    },

    viewBottom: {
        flex: 6,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopWidth: 3,
        borderTopColor: 'black'
    },

    viewBottomButton: {
        width: '100%',
        backgroundColor: 'linen',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    paragrahpText: {
        fontSize: 23,
        fontFamily: 'Optima',
        paddingTop: '2%'
    },

    headerText: {
        fontSize: 30,
        fontFamily: 'Optima',
        paddingTop: '2%'
    },

    headerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'linen',
    },

    paragraphView: {
        flex: 9,
        backgroundColor: 'linen',
        paddingLeft: '2%',
        paddingRight: '2%',
    },

    statTextName: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Optima',
        paddingBottom: '10%',
        paddingLeft: '5%'
    },

    statHeader: {
        fontSize: 35,
        fontFamily: 'Optima',
        marginBottom: '10%',
        textDecorationLine: 'underline'
        
    },

    statText: {
        fontSize: 30,
        fontFamily: 'Optima',
        paddingBottom: '10%',
        flexDirection: 'column'
    },

    statTextDelete: {
        fontSize: 30,
        fontFamily: 'Optima',
        paddingBottom: '10%',
        flexDirection: 'column',
        color: 'red'
    },

    statBoxName: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'linen',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },

    buttonColumn: {
        flex: 5,
    },

    playerColumn: {
        flex: 3,
        backgroundColor: 'linen',
        justifyContent: 'center',
        alignItems: 'center'
    },

    scoreColumn: {
        flex: 3,
        backgroundColor: 'linen',
        justifyContent: 'center',
        alignItems: 'center'
    },

    deleteColumn: {
        flex: 1,
        backgroundColor: 'linen',
        justifyContent: 'center',
        alignItems: 'center'
    },

    statBoxThrows: {
        flex: 2,
        width: '50%',
        height: '100%',
        backgroundColor: 'linen',
        alignItems: 'center'
    },

    statTextThrows: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Optima',
        paddingBottom: '10%',
        paddingLeft: '5%'
    },

    throwHeader: {
        justifyContent: 'flex-start',
        fontSize: 30,
        fontFamily: 'Optima',
    },

    addPlayerButton: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'
    },

    addPlayerButtonText: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'Optima',
    },

    addPlayerInput: {
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 25,
        height: '12%',
        width: '50%',
        fontSize: 24,
    },

    alertDialogButton: {
        width: '30%',
        height: '125%',
        alignItems: 'center',
        marginLeft: '5%',
    },

    alertDialogText: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Optima',
    },

    alertDialogTextDanger: {
        fontSize: 20,
        color: 'red',
        fontFamily: 'Optima',
    },

    alertDialogHeader: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Optima',
        alignItems: 'center'
    },

    alertDialogHeaderText: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Optima',
        alignItems: 'center'
    },
})

export { styles }