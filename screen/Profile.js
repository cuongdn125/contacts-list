import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import {fetchRamdomContact} from '../utils/api';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import colors from '../utils/colors';

function Profile(props) {
    const {route} = props;
    const {name, avatar, phone, email, cell} = route.params;
    const [contact, setContact] = useState({});

    // useEffect(() => {
    //     async function getData() {
    //         try{
    //             const newContact = await fetchRamdomContact();
    //             setContact(newContact);
    //         }catch(e){
    //             console.log(e);
    //         }
    //     }
    //     getData();
    // },[]);

    // const {name, avatar, phone, email, cell} = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail name={name} avatar={avatar} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon='mail' title='Email' subtitle={email} />
                <DetailListItem icon='phone' title='Phone' subtitle={phone} />
                <DetailListItem icon='smartphone' title='Personal' subtitle={cell} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: colors.white,
    }
})

export default Profile;