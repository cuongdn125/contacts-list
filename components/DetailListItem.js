import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

DetailListItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

function DetailListItem(props) {
    const { icon, title, subtitle } = props;
    return (
        <View style={styles.container}>
            <Icon name={icon} size={30} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginLeft: 20,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
    },
    details: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.blue,
        fontSize: 16,
        paddingTop: 5,
        fontWeight: '500',
    }
})

export default DetailListItem;