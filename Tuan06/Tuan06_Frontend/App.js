import { StyleSheet, Text, View } from 'react-native';
import {AppNavigation} from './src/navigations/AppNavigation';
import { AuthProvider } from './src/hook/useAuth';
export default function App() {
  return (
    <>
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
