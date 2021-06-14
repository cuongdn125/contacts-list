import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View, Text, TouchableHighlight} from 'react-native';

import colors from '../utils/colors';

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

ContactListItem.defaultProps = {
    onPress: () => {},
}

function ContactListItem(props) {

    const { name, avatar, phone, onPress } = props;
    return (
        <TouchableHighlight underlayColor={colors.grey} onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Image style={styles.image} source={{uri: avatar}} />
                <View style={styles.details}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.phone}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        flex: 1,
    },
    image: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: colors.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 20,
        paddingRight: 30,
    },
    details: {
        justifyContent: 'center',
        marginLeft: 16,
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        color: colors.black,
    },
    phone: {
        flex: 1,
        color: colors.blue,
        fontSize: 16,
    }
})

export default ContactListItem;