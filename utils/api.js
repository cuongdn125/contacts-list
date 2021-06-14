import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import capitalize from './capitalize';

const mapContact = contact => {
    const {name, phone, picture, cell, email} = contact;
    return {
        id: uuidv4(),
        name: `${capitalize(name.first)} ${capitalize(name.last)}`,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() >= 0.5,
    }
}

export const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const contactData = await response.json();
    return contactData.results.map(mapContact);
  };

export const fetchUserContact = async () => {
    const response = await fetch('https://randomuser.me/api/?seed=fullstacki');
    const userData = await response.json();
    return mapContact(userData.results[0]);
}

export const fetchRamdomContact = async () => {
    const response = await fetch('https://randomuser.me/api');
    const userData = await response.json();
    return mapContact(userData.results[0]);
}