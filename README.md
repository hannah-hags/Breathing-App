# Breathing-App

App containing a walkthrough of basic breathing exercises. This is a class project for CS 4261 and is soley being used as a way to practice app development skills. For this, I chose to develop using javascript with ReactNative and Expo. The app can be viewed on a mobile phone using the Expo Go app. 

Project is exclusively worked on by hannah-hags.

## Components
App.js contains navigation features connecting the three other files

StartScreen.js contains code and details for the first screen that appears when the app is opened. Pressing the Begin button navigates to SelectionScreen.js

SignInPage.js asks the user to input their username and passowrd before clicking Sign In to continue into the app. Clicking Sign In takes them to the Selection Screen. New users are given the option to Sign Up, which takes them to the Sign Up page. This functionality uses AWS Amplify to compare to the user list and allow logins.

SignUpPage.js asks the user to provide their email, as well as choose a username and password. Upon clicking Sign Up, they will be led to an account confirmation page and a confirmation email containing a code will be sent to them. This functionality uses AWS Amplify to add them to the user list as an "Unconfirmed" user. 

ConfirmationPage.js asks the users to input their username and the confirmation code they received in an email. If the code is correct AWS Amplify updates the user to "Confirmed". Users will then be redirected to the Sign In page.

SelectionScreen.js contains buttons leading to all offered breathing exercises. Only one is currently available.

BreathingExercise1.js walks the user through a basic 4-7-8 breathing exercise once the Begin button has been pressed.

BreathingExercise2.js walks the user through a box breathing exercise (4 seconds each side of the box) once the Begin button has been pressed.

## Expo
Expo is used to create an environment from which the app can run on the web, ios, or andriod. In order to use on your phone, download the ExpoGo App and follow instructions in the following guides:

Setting up Expo in React Native: https://reactnative.dev/docs/environment-setup

Create First Expo Project: https://docs.expo.dev/tutorial/create-your-first-app/

## AWS Amplify 
This project uses AWS Amplify for all backend and authentication functions. Amplify allows for the administrator to monitor the authentication process (password rules, username logins, etc.), manage users, push account confirmation emails, and more! In order to use Amplify in conjunction with React Native and Expo, follow the instructions at:

Create Amplify Account: https://aws.amazon.com/amplify/?trk=9eb02e4d-80e0-4f27-a621-b90b3c870bf3&sc_channel=ps&ef_id=CjwKCAjwrranBhAEEiwAzbhNtRPT_nfol239nA0ZDNHWU0qGyV6Ze031Q14WG2lT4HKHgTYiMjTN5RoC2iEQAvD_BwE:G:s&s_kwcid=AL!4422!3!651751060767!p!!g!!aws%20amplify%20framework!19852662236!145019201457

Getting Started with React Native and Amplify: https://docs.amplify.aws/lib/auth/getting-started/q/platform/react-native/ & https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native/

Setting Up Authentication: https://docs.amplify.aws/lib/auth/emailpassword/q/platform/react-native/#add-the-sign-up-sign-in-and-sign-out-capabilities

## Running the App on Personal Device
To Run As Admin:
1. Download code from repository and load in React Native Environment.
2. Download and install ExpoGo app on iPhone or Android Phone.
3. Install Expo and AWS Amplify packages with React Native following documentation in AWS Amplify and Expo Sections.
4. Open terminal and naviagate to BreathingApp folder.
5. Type expo start in terminal to load app.
6. Follow instructions to load app on phone or on web.
7. Have Fun!

To Run as User:
1. Download ExpoGo app on iPhone or Android Phone.
2. Scan the QR code provided by admin running code.
3. Have Fun!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources
https://www.makeuseof.com/react-native-navigate-between-screens/

https://feralcat.xyz/blog/2020/07/03/vertically-and-horizontally-center-text-in-react-native/

https://reactnative.dev/docs/style

https://reactnative.dev/docs/handling-touches

https://reactnative.dev/docs/colors

https://reactnative.dev/docs/button

https://reactnative.dev/docs/imagebackground

https://www.verywellmind.com/abdominal-breathing-2584115

https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t
