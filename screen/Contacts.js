import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, FlatList, View, Text, ActivityIndicator} from 'react-native';

import ContactListItem from '../components/ContactListItem';

import { fetchContacts} from '../utils/api';



function Contacts(props) {
    const {navigation} = props;
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                const newContacts = await fetchContacts();
                setContacts(newContacts);
                setLoading(false);
                setError(false);
            }catch (e) {
                setLoading(false);
                setError(true);
            }
        }
        getData();
    },[]);

    const renderContact = ({item}) => {
        const {name, avatar, phone} = item;
        return <ContactListItem name={name} avatar={avatar} phone={phone} onPress={() => {navigation.navigate('Profile', item)}} />
    }
    let newContacts = contacts;
    const contactsSorted = newContacts.sort((a,b) => a.name.localeCompare(b.name)); 
    const keyExtractor = ({phone}) => phone;
    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size={'large'} />}
            {error && <Text>Error ...</Text>}
            {!loading && !error && (
                <FlatList 
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                />  
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    }
})

export default Contacts;