# Mac

## I don't have development environment setup up yet:

1.  Update (or download) Xcode in Software Update section in AppStore app
2.  Open the terminal (in Applications/Utilities), copy, paste, and run with return `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3.  In the terminal run `curl -L https://git.io/n-install | bash`
4.  Run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
5.  Run `brew install yarn --without-node`
6.  Run `brew install git`

### I don't have a project created yet:

1.  Install Create React App for web `npm install --global create-react-app`
1a. If you need to run it as an administrator `sudo npm install --global create-react-app`
2.  Install Create React App for native platforms (iOS, Android) `npm install --global create-react-native-app`
2a. If you need to run it as an administrator `sudo npm install --global create-react-native-app`
3.  Install Views `npm install --global @viewstools/use`
3a. If you need to run it as an administrator `sudo npm install --global @viewstools/use`
4.  Create your React web(DOM) project `create-react-app my-app` or React Native project `create-react-app my-app`
5.  Go to the project directory, type `cd` (with space after cd) and drag project folder on the terminal window
6.  Run `use-views` to enable Views on your project
7.  Ensure all dependencies are installed `yarn`
8.  To start the project run `yarn start` - if it's a web project it will open in the browser if it's a native project it will open iOS simulator

## If you working on a React Native project only (iOS, Android) you need to also

1.  Install Xcode from App Store
2.  Open Xcode and follow installation steps to get all the modules (we need iOS simulator)
3.  Run `brew install watchman`
4.  To get expo simulator for native run `yarn global add exp`
5.  To install expo ios `exp install:ios`
6.  To start project run `yarn start` - you will get a QR code and URL. You can scan the code with your mobile or copy the code
7.  In a new tab (CMD+t) run `expo ios` - it will open the simulator
8.  Scroll to the right on the simulator screen and open Expo app
9.  Click on the clipboard shortcut, your project will open

# Windows for React DOM

1.  Download NodeJS from https://nodejs.org/en/ and install it.
2.  Download and install Yarn https://yarnpkg.com/lang/en/docs/install/.
3.  Download and install GIT https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-windows-md.
4.  Open the terminal (in Start/Program Files/Accessories/Command Prompt).
5.  Go to the project directory, type `cd` (yes, with space after cd) and drag project folder on the terminal window
6.  You might be missing dependencies, so run `yarn`
7.  To start the project run `yarn start` - if it's a web project it will open in the browser

Happy building! You are all set.
In case if you run into any road blocks reach out with questions via Slack at https://slack.viewsdx.com/ and tag @dario or @tombrewsviews
