import { faBell, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import {  faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, StyleSheet, View } from 'react-native';

export default function Footer({}) {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faHome}
                size={24}
            />

            <FontAwesomeIcon
                icon={faSearch}
                size={24}
            />

            <FontAwesomeIcon
                icon={faSquarePlus}
                size={24}
            />

            <FontAwesomeIcon
                icon={faBell}
                size={24}
            />

            <Image
                source={{ uri: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png' }}
                style={styles.profilepic}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 0.2,
        borderTopColor: '#ccc',
    },
    profilepic: {
        width: 24,
        height: 24,
        borderRadius: 200
    }
});