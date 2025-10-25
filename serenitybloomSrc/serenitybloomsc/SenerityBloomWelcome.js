import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SenerityBloomWelcome = () => {
  const [serenityBloomIdx, setSerenityBloomIdx] = useState(0);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/serenityappbg.png')}
      style={styles.serenitybackground}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}
        >
          {serenityBloomIdx === 0 && (
            <Image
              source={require('../../assets/images/serenityonb1.png')}
              style={{ left: -20 }}
            />
          )}
          {serenityBloomIdx === 1 && (
            <Image source={require('../../assets/images/serenityonb2.png')} />
          )}
          {serenityBloomIdx === 2 && (
            <Image
              source={require('../../assets/images/serenityonb3.png')}
              style={{ top: 60 }}
            />
          )}
          {serenityBloomIdx === 3 && (
            <Image source={require('../../assets/images/serenityonb4.png')} />
          )}

          <View style={styles.serenitywelccont}>
            <Text style={styles.serenitywelctitle}>
              {serenityBloomIdx === 0 && 'Welcome to Woodbine Serenity Bloom'}
              {serenityBloomIdx === 1 && 'Daily Check-Ins'}
              {serenityBloomIdx === 2 && 'Personalized Guidance'}
              {serenityBloomIdx === 3 && 'Begin Your Journey'}
            </Text>
            <Text style={styles.serenitywelcsubtitle}>
              {serenityBloomIdx === 0 &&
                'Discover a calm daily space where reflection meets balance — one mindful minute at a time.'}
              {serenityBloomIdx === 1 &&
                'Answer four simple questions each day to explore your emotional state and track your personal bloom.'}
              {serenityBloomIdx === 2 &&
                'Receive advice, breathing exercises, and meditations tailored to your current mood.'}
              {serenityBloomIdx === 3 &&
                'Start your mindful practice and let Woodbine Serenity Bloom guide you toward inner calm.'}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (serenityBloomIdx < 3) {
                setSerenityBloomIdx(serenityBloomIdx + 1);
              } else {
                navigation.replace('SenerityBloomTab');
              }
            }}
          >
            <ImageBackground
              source={require('../../assets/images/serenitybtn.png')}
              style={{
                width: 103,
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.serenitybtntext}>
                {serenityBloomIdx === 0 && 'Proceed'}
                {serenityBloomIdx === 1 && 'Proceed'}
                {serenityBloomIdx === 2 && 'Next'}
                {serenityBloomIdx === 3 && 'Start'}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  serenitybackground: {
    flex: 1,
    width: '100%',
    paddingBottom: 50,
  },
  serenitywelccont: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 22,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 60,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  serenitybtntext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  serenitywelctitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    fontFamily: 'Sansation-Bold',
    textAlign: 'center',
  },
  serenitywelcsubtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Sansation-Regular',
    textAlign: 'center',
  },
});

export default SenerityBloomWelcome;
