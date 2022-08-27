
import React, {UseState, useEffect} from 'react'
import {View} from 'react-native'


import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import ProfileInfo from '../../components/ProfileInfo';
import Space from '../../components/Space';

const Profile = (props) => {
    return (
        <View>
            <Header/>
            <Space/>
            <ProfileInfo/>
            <NavBar/>
        </View>
           
    );
};

export default Profile;

