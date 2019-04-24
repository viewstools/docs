# Mac

## If you don't have any development environment setup:

1. Update (or download) Xcode in Software Update section in AppStore app
2. Open Xcode and follow installation steps to get all the modules (we need iOS simulator)
3. Open the terminal (in Applications/Utilities) and run the following commands:
4. Install homebrew to manage packages
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
5. Install n to manage node
`curl -L https://git.io/n-install | bash`
6. Install watchman for react native
`brew install watchman`
7. Install git to manage code
`brew install git`
8. Install yarn to manage node npm packages
`brew install yarn --without-node`
9. Install expo-cli to manage react native apps
`yarn global add expo-cli`
10. Install create-react-app for web projects
`yarn global add create-react-app`
11. Install create-react-native-app for iOS and Android projects
`yarn global add create-react-native-app`
12. Install a helper to setup views on web and native projects
`yarn global add @viewstools/use`

## If you want to create new React DOM project:
1. Create your project using `create-react-app my-app`. Change `my-app` to whatever it's called.
2. Go to the project directory, type `cd ` (with space after cd) and drag project folder on the terminal window
3. Run `use-views` to enable Views on your project
4. Ensure all dependencies are installed `yarn`
5. To start the project run `yarn start` - the project will open in the browser 

## If you want to create new React Native project:
1. Create your project using `create-react-app my-app`
2. Go to the project directory, type `cd ` (with space after cd) and drag project folder on the terminal window
3. Run `use-views` to enable Views on your project
4. To start project run yarn start - you will get a QR code and URL. You can scan the code with your mobile or copy the code
5. In a new tab (CMD+t) run expo ios - it will open the simulator
6. Swipe to the right on the simulator screen and open Expo app
7. Click on the clipboard shortcut in Terminal and your project will open
8. Run `exp install:ios` to install the Expo app into the iOS simulator. You might need to run `sudo xcode-select -s /Applications/Xcode.app` before.

# Windows for React DOM

1.  Download NodeJS from https://nodejs.org/en/ and install it.
2.  Download and install Yarn https://yarnpkg.com/lang/en/docs/install/.
3.  Download and install GIT https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-windows-md.
4.  Open the terminal (in Start/Program Files/Accessories/Command Prompt).
5.  Go to the project directory, type `cd` (yes, with space after cd) and drag project folder on the terminal window
6.  You might be missing dependencies, so run `yarn`
7.  To start the project run `yarn start` - if it's a web project it will open in the browser

# Linter and syntax highlighing

1. You can get the syntax highlighting for Vim, Atom, VSCode, Sublime here [Syntax Highlighting](SyntaxHighlighting/README.md)
2. We've kicked off a basic linter for the Views syntax. I covers few most important use cases for now and we will be adding more in time. You can get it here [Views Linter](https://marketplace.visualstudio.com/items?itemName=uxtemple.views-lsp)

Happy building! You are all set.
Reach out with questions via Github Issues [Github Issues](https://github.com/viewstools/docs/issues).
Mention `@tombrewsviews` or `@dariocravero` to make sure that we get your notifications.