import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
    card: {
        margin: 8,
    },
    cardLabel: {
        marginLeft: 8
    },  
    cardContent: {      
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray',
        paddingLeft: 8,   
        paddingRight: 8,          
    },  
    cardRow: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },    

    textInputWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon: {       
        width: 40,
        height: 40
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
    },

    tip: {
        fontSize: 10,
        margin: 16,
    }
});