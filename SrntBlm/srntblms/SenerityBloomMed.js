import { Dimensions, StyleSheet, View } from 'react-native';
import { serenitybloommedt } from '../srntblmd/serenitybloommedt';
import SerenityBloomCard from '../srntblmcm/SerenityBloomCard';
import SerenityBloomLayout from '../srntblmcm/SerenityBloomLayout';

const { height } = Dimensions.get('window');

const SenerityBloomMed = () => {
  return (
    <SerenityBloomLayout>
      <View style={styles.serenitycnt}>
        {serenitybloommedt.map((article, index) => (
          <SerenityBloomCard key={index} article={article} meditations />
        ))}
      </View>
    </SerenityBloomLayout>
  );
};

const styles = StyleSheet.create({
  serenitycnt: {
    paddingTop: height * 0.08,
    padding: 16,
    paddingBottom: 110,
  },
});

export default SenerityBloomMed;
