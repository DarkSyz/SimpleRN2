import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
    label: {
        marginTop: 16,
        marginLeft: 16
    },

    card: {
        margin: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray'
    },

    textInputWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    icon: {
        marginLeft: 8,
        width: 40,
        height: 40
    },

    cardRow: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    circleButtonContainer: { 
        margin: 24, 
        alignItems: 'center' 
    },
    circleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#108ee9',
        borderRadius: 48,
        width: 96,
        height: 96,
    },
    smallIcon: { 
        margin: 8, 
        width: 12, 
        height: 12 
    }
});