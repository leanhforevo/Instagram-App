
# Instagram App

- InsApp is a React Native application that replicates key features of Instagram.
- It not include all requirements, but it is the best for part time in 4 day. Hope this good for you



Demo Video: https://drive.google.com/file/d/1SWKugwtBCLaOnLFOdIE44ybgau6GTGQd
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

## Introduction

InsApp is a mobile application developed using React Native, aiming to provide a seamless user experience similar to Instagram. Users can view engaging short video reels and search for other users within the app.

![plot](./__screenshot__/home.png)
## Features

- View Reel&Post
- Search User
- Animation
  

https://github.com/leanhforevo/Instagram-App/assets/17523534/8a2ea6a4-e82a-41ca-a155-5facf473e857


- UnitTest (search screen)

## Getting Started
  - Add config key in ./src/services/configs.json
  - Register data in [Rappid API](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2): 
  ``` 
  {
    "baseURL": "",
    "apiKey": "",
    "apiHost": ""
  }
  ```

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

### Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/leanhforevo/Instagram-App.git
cd Instagram-App
npm install
# or if you use Yarn
yarn install
```

## Running the App

### iOS

Run the following command to start the iOS app:

```sh
npx react-native run-ios
```

### Android

Run the following command to start the Android app:

```sh
npx react-native run-android
```

Ensure you have an Android emulator running or a device connected.

## Testing

To run the tests, use:

```sh
npm test
# or if you use Yarn
yarn test
```
![plot](./__screenshot__/unittest.png)
## Folder Structure

Provide a brief explanation of the project folder structure:

```
MyReactNativeApp
├── android             # Android specific code
├── ios                 # iOS specific code
├── src                 # Source code
│   ├── components      # Reusable components
│   ├── views         # Application screens
│   ├── navigation      # Navigation configuration
│   ├── services        # API services
│   ├── store           # State management (not yet)
│   ├── utils           # Utility functions
│   └── index.tsx         # Entry point
├── __tests__           # Test files
├── package.json        # Project dependencies
└── README.md           # Project documentation
```


## Contact

If you have any questions, feel free to reach out:

- Email: leanhforevo@gmail.com.com
- GitHub: [leanhforevo](https://github.com/leanhforevo)
