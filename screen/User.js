import React, { useEffect, useState } from 'react';
import{StyleSheet, View} from 'react-native';

import {fetchUserContact} from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';

import colors from '../utils/colors';

function User(props) {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        (async function () {
            try{
                const newUser = await fetchUserContact();
                setUser(newUser);
                setLoading(false);
                setError(false);
            }catch(e){
                setError(true);
                setLoading(false);
                console.error(e);
            }
        })()
    },[]);
    const {name, avatar, phone} = user;
    return (
        <View style={styles.container}>
            <ContactThumbnail name={name} avatar={avatar} phone={phone}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        flex: 1,
    }
})

export default User;