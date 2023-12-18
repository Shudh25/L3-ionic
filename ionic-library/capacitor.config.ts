import { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'io.ionic.starter',
//   appName: 'ionic-library',
//   webDir: 'dist',
//   allowMixedContent?: true,
//   server: {
//     androidScheme: 'https',
//   }
// };

// export default config;


 
const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-library',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: true
  }
};
 
export default config;
