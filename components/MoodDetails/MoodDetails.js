import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const groupMoodDataByMonthAndYear = (data) => {
    const groupedData = {};
  
    data.forEach(item => {
      const [day, month, year] = item.date.split(' ');
      const key = `${month} ${year}`;
  
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(item);
    });
    const sortedKeys = Object.keys(groupedData).sort((a, b) => {

      const [monthA, yearA] = a.split(' ');
      const [monthB, yearB] = b.split(' ');
  
      if (yearA !== yearB) {
        return parseInt(yearB) - parseInt(yearA);
      }
  
      const monthOrder = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
      };
      return monthOrder[monthB] - monthOrder[monthA];
    });
  
    const sortedGroupedData = {};
    sortedKeys.forEach(key => {
      sortedGroupedData[key] = groupedData[key];
    });
  
    return sortedGroupedData;
  };
  
const MoodDetails = ({ data }) => {
    const groupedData = groupMoodDataByMonthAndYear(data);

    const flatListData = Object.entries(groupedData).reduce((acc, [monthYear, items]) => {
        acc.push({ key: monthYear, isHeader: true });
        items.forEach(item => {
            acc.push({ key: item.date, isHeader: false, data: item });
        });
        return acc;
    }, []);

    const renderItem = ({ item }) => {
        if (item.isHeader) {
            return <Text style={styles.heading}>{item.key}</Text>;
        } else {
            const { data } = item;
            return (
                <View style={styles.card}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateDay}>{data.date.split(' ')[0]}</Text>
                        <Text style={styles.dateMonth}>{data.date.split(' ')[1]}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.mode}>{data.mode}</Text>
                        <Text style={styles.details}>{data.details}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={data.icon} style={styles.icon} />
                    </View>
                </View>
            );
        }
    };

    return (
        <FlatList
            padding={4}
            margin={4}
            data={flatListData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key}
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    dateContainer: {
        alignItems: 'center',
    },
    dateDay: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateMonth: {
        fontSize: 16,
        color: '#718096',
    },
    divider: {
        height: '80%',
        width: 1,
        backgroundColor: '#CBD5E0',
        marginHorizontal: 10,
    },
    detailsContainer: {
        flex: 1,
    },
    mode: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        color: '#718096',
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
    },
});

export default MoodDetails;
