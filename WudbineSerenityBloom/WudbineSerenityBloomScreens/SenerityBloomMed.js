import { Dimensions, StyleSheet, View } from 'react-native';
import { serenitybloommedt } from '../WudbineSerenityBloomData/serenitybloommedt';
import SerenityBloomCard from '../WudbineSerenityBloomComponents/SerenityBloomCard';
import SerenityBloomLayout from '../WudbineSerenityBloomComponents/SerenityBloomLayout';

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
