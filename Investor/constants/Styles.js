import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal:6
  },
  pillButton: {
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLink: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '400',
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 8,
    marginLeft:10,
    color: Colors.gray,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
});
