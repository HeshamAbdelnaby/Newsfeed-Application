import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage  } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { color } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';

const DropDownList = () => {
    const [selected, setSelected] = useState('en');

    // const themeMode = useSelector(state => state.news.darkMode);

    const data = [
        {
            key:'en',
            value:'English',
        },
        {
            key:'es',
            value:'Spanish',
        },
    ];

    const _storeData = async () => {
      try {
        await AsyncStorage.setItem(
          'Language',
          selected
        );
      } catch (error) {
        console.log("Saving error");
      }
    };

    // const _retrieveData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('Language');
    //     if (value !== null) {
    //       // We have data!!
    //       console.log('value: ' + value);
    //     }
    //   } catch (error) {
    //     // Error retrieving data
    //   }
    // };

    useEffect(() => {
        console.log('selected: ' + selected);

        _storeData();

    },[selected]);

    return(
      <View style={{backgroundColor: Colors.primaryColor, borderRadius:10}}>
        <SelectList
          data={data}
          setSelected={setSelected}
          placeholder='Default Language is English'
          inputStyles={{color: 'white'}}
          dropdownTextStyles={{color: 'white'}}
        />
      </View>
    );
}

export default DropDownList;