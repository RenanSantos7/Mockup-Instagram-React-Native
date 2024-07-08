import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                    source={require('../img/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={styles.send}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderBottomColor: '#ddd',
        elevation: 2,
    },
    logo: {},
    send: {
        fontSize: 25
    }
});