import { registerRootComponent } from 'expo';

import App from './App';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// import "expo/build/Expo.fx"
// import registerRootComponent from "expo/build/launch/registerRootComponent"
// import { createRoot } from "react-dom/client"
// import { createElement } from "react"
// import { Platform } from "react-native"
// import App from "./App"

// if ("web" === Platform.OS) {
//     const rootTag = createRoot(
//         document.getElementById("root") ?? document.getElementById("main")
//     )
//     rootTag.render(createElement(App))
// } else {
//     registerRootComponent(App)
// }