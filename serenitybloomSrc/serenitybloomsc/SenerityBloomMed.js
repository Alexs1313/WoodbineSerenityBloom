import { Dimensions, StyleSheet, View } from 'react-native';
import { serenitybloommedt } from '../serenitybloomdta/serenitybloommedt';
import SerenityBloomCard from '../serenitybloomcp/SerenityBloomCard';
import SerenityBloomLayout from '../serenitybloomcp/SerenityBloomLayout';

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
