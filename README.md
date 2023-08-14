# Performance App - React Native

The **_PerformanceApp_** is a project built with React Native and Expo with the purpose of testing and seeing use cases for some specific React hooks, as well as testing integration with API requests.

<h3 align="center">
  <a href="#motive">Motive</a>&nbsp;|&nbsp;
  <a href="#minimum-requirements">Requirements</a>&nbsp;|&nbsp;
  <a href="#rocket-technologies-used">Technologies</a>&nbsp;|&nbsp;
  <a href="#package-how-to-download-and-run-the-project">Download and Run</a>&nbsp;
</h3>

---
<div align="center" >
<img src="https://github.com/MateusAnderle/performanceApp/assets/100309091/a6b60565-0d9f-475e-83be-eaaf82fe7cd6" width="300">
</div>
---

## :information_source: Motive

The project was created with the intention of testing the functionalities of React hooks to address performance issues and unnecessary rendering/calculations in interfaces. It utilizes the useMemo and useCallback hooks to enhance component performance and calculations, as well as memoization to keep certain components unchanged.

In the example of the Friends card component that was repeated multiple times, there was no need for it to be re-rendered or modified with each interaction from other components.

In this project, both animations and glassmorphism were employed to add a touch of modernity and interactivity to the interface, enhancing the user experience through gestures.

- **Home**:

<div align="center" >
  <img src="https://i.imgur.com/76YgRfi.png" width="250">
</div>

---

## Minimum Requirements

- Android Studio or Xcode
- Mobile device (optional)
- Expo(desktop)
- Expo Go(Mobile) opcional.
- Node.js
- React-Native
- NPM

---

## Technologies Used

This project was developed using the following technologies

- [Android Studio](https://developer.android.com/studio)
- [Expo](https://expo.dev/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Lodash](https://lodash.com/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [JSON Server](https://github.com/typicode/json-server)
- [NPM](https://www.npmjs.com/)

---

## :package: How to Download and Run the Project

- Clone the project:
  ```bash
   git clone https://github.com/MateusAnderle/performanceApp
  ```
- Install the dependencies:
  - Execute the command below inside the project folder
  ```bash
    npm i
  ```
- Installation of the emulator [Android Studio](https://developer.android.com/studio) or [XCode](https://developer.apple.com/xcode/resources/) and the required technologies mentioned in <a href="#minimum-requirements">Requirements</a>

- Also, the installation/configuration of other technologies is necessary. Follow the steps indicated on this page according to your operating system: [Running a React-Native Application emulating Windows/Linux/MacOS or directly on Android/IOS mobile device](https://reactnative.dev/docs/environment-setup)
- Expo installation is necessary [Expo](https://expo.dev/)
- Execution - Open the project folder with an IDE (Vscode) or simply open the terminal in the project folder and run the command below

### First of all, run the json-server:

```bash
npm run server
```

### After that, run the following command in another terminal.

For iOS:

```bash
npm run ios
```

For android:

```bash
npm run android
```

- Remember that if you are running it on an emulator, it is ideal to keep it open before applying the above commands.

---

## :balance_scale: License

This project is under the MIT license. See the [LICENSE](https://github.com/MateusAnderle/performanceApp/blob/main/LICENSE) for more information.

---

:rocket: Developed by Mateus Anderle da Silva [Get in touch!](https://www.linkedin.com/in/mateus-anderle-da-silva/)
