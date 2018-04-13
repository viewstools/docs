# Mac

## General, for React DOM and React Native ##
3. Open the terminal (in Applications/Utilities) and run `curl -L https://git.io/n-install | bash`
4. Open new tab (CMD+t) and run `n lts`
5. Run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
6. Run `brew install yarn --without-node`
1. Install GIT https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-mac-md
7. Go to the project directory, type `cd ` (yes, with space after cd) and drag project folder on the terminal window
8. You might be missing dependencies, so run `yarn`
9. To start the project run `yarn start` - if it's a web project it will open in the browser


## If you working on a React Native project (mobile) you need to also ##
1. Install Xcode from App Store
2. Open Xcode and follow installation steps to get all the modules (we need iOS simulator)
1. Run `brew install watchman`
2. To get expo simulator for native run `yarn global add exp`
3. To install expo ios `exp install:ios`
4. To start project run `yarn start` - you will get a QR code and URL. You can scan the code with your mobile or copy the code
5. In a new tab (CMD+t) run `expo ios` - it will open the simulator
6. Scroll to the right on the simulator screen and open Expo app
7. Click on the clipboard shortcut, your project will open

Happy building! You are all set.
In case if you run into any road blocks reach out with questions via Slack at https://slack.viewsdx.com/ and tag @dario or @viewsdx-tom

# Windows for React DOM

1. Download NodeJS from https://nodejs.org/en/ and install it.
2. Download and install Yarn https://yarnpkg.com/lang/en/docs/install/.
3. Download and install GIT https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-windows-md.
3. Open the terminal (in Start/Program Files/Accessories/Command Prompt).
7. Go to the project directory, type `cd ` (yes, with space after cd) and drag project folder on the terminal window
8. You might be missing dependencies, so run `yarn`
9. To start the project run `yarn start` - if it's a web project it will open in the browser
