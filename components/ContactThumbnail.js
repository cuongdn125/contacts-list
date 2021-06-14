import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Image, Text, ColorPropType} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    textColor: ColorPropType,
    onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
}

function ContactThumbnail(props) {
    const { name, avatar, phone, textColor, onPress } = props;

    const ImageComponent = onPress ? TouchableOpacity : View;
    const colorStyle = {
        color: textColor,
    }
    return (
       <View style={styles.container}>
           <ImageComponent onPress={onPress}>
                <Image source={{uri: avatar}} style={styles.avatar} />
           </ImageComponent>
           {name !=='' && <Text style={[styles.name, colorStyle]}>{name}</Text>}
           {phone !== '' && 
                <View style={styles.phoneSections} >
                    <Icon name='phone' size={18} style={{color: textColor}} />
                    <Text style={[styles.phone, colorStyle]}>{phone}</Text>
                </View>
           }
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
    },
    phoneSections: {
        flexDirection: 'row',
        marginTop: 15,
    },
    phone: {
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 10,
    }
})

export default ContactThumbnail;