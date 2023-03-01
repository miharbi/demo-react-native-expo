import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ imageSource, selectedImage }) {
  imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : imageSource;
  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});