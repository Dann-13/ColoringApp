import React from 'react'
import { Button, StyleSheet, View } from 'react-native';
interface PopoverProps {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
}
function Popover({ isVisible, children, onClose }: PopoverProps) {
    if (!isVisible) {
        return null;
    }
    return (
        <View style={styles.popoverContainer}>
            <View style={styles.popoverContent}>
                {children}
                <Button title='Close' onPress={onClose} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popoverContainer: {
        position: 'absolute',
        top: '55%',
        left: '50%',
        padding:20,
        transform: [{ translateX: -100 }, { translateY: -200 }],
        zIndex: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width:"60%",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    popoverContent: {
        width:"100%"
    },
});

export default Popover