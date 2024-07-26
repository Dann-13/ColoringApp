import React, { useCallback, useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
interface Place {
    id: number;
    img: string;
    name: string;
    dates: string;
    rating: string;
    description: string;
}

const places: Place[] = [
    {
        id: 1,
        img: 'https://illustoon.com/photo/3293.png',
        name: 'Dibujo de Estrella',
        dates: '25/07/2024',
        rating: "❤🤣",
        description: "Dibiertete Pintando una estrella"
    },
    
];

function Home() {
    const [saved, setSaved] = useState<number[]>([]);
    const navigation = useNavigation();
    
    const handleSave = useCallback((id: number) => {
        setSaved(prevSaved =>
            prevSaved.includes(id) ? prevSaved.filter(val => val !== id) : [...prevSaved, id]
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>¡Pinta Ahora!</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                {places.map(({ id, img, name, dates, description, rating }) => {
                    const isSaved = saved.includes(id);
                    return (
                        <TouchableOpacity
                            key={id}
                            onPress={()=>navigation.navigate("Coloring")}
                           >
                            <View style={styles.card}>
                                <View style={styles.cardLikeWrapper}>
                                    <TouchableOpacity onPress={() => handleSave(id)}>
                                        <View style={styles.cardLike}>
                                            <Text>{isSaved ? 'Saved' : 'Save'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.cardTop}>
                                    <Image
                                        alt=""
                                        resizeMode="cover"
                                        style={styles.cardImg}
                                        source={{ uri: img }} />
                                </View>
                                <View style={styles.cardBody}>
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.cardTitle}>{name}</Text>
                                        <Text style={styles.cardStars}>{rating}</Text>
                                    </View>
                                    <Text style={styles.cardDates}>{dates}</Text>
                                    <Text style={styles.cardPrice}>
                                        <Text style={{ fontWeight: '600' }}>{description} </Text>
                                    </Text>
                                    
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 8,
        paddingHorizontal: 16,
    },
    /** Header */
    header: {
        paddingHorizontal: 16,
        marginBottom: 12,
        marginTop:50
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    /** Card */
    card: {
        position: 'relative',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardLikeWrapper: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        right: 12,
    },
    cardLike: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardImg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#232425',
        marginRight: 'auto',
    },
    cardStars: {
        marginLeft: 2,
        marginRight: 4,
        fontSize: 15,
        fontWeight: '500',
        color: '#232425',
    },
    cardDates: {
        marginTop: 4,
        fontSize: 16,
        color: '#595a63',
    },
    cardPrice: {
        marginTop: 6,
        fontSize: 16,
        color: '#232425',
    },
});
export default Home