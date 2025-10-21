# 2025-1stIonicApp
This is the first Ionic App repository created for the 2025 INT-5.2 class. 
Here you will find notes on the very basics for this unit. More instructions can be found as inline comments within the project itself. 

## Lecture 1 
First make sure to install Node JS, Angular, and Ionic (Homebrew should be used if you use a macbook)

- Once installed, check the version number via Terminal/CMD to see that it was installed correctly
    - node -v
- Also check that Node Package Manager was installed correctly 
    - npm -v
- Once Node JS has been installed correctly, install Angular
    - npm install -g @angular/cli
- Check that Angular was installed correctly by checking its version 
    - ng v
- Similarly to Angular, install Ionic
    - npm install -g @ionic/cli
- Once installed, check its version number to see it installed correctly
    - ionic -v

*Suggestion:* Create a folder for all applications you will create. Create GitHub repos here, which will create a folder for each app you will create. 

### VS Code Extensions Suggestions
- Prettier
    - Enforces formatting
    - Right Click > Format Document With... > Prettier
- Auto Rename Tag
    - Updates closing tags when opening tags are modified, and vice versa
- Angular Snippets and Angular Language Service
    - Adds some automation and recognition of special Angular items to help code faster
- Ionic 
    - Official Ionic extension, provides GUI to Terminal/CMD commands we will be using frequently

### Creating an app
- In Terminal/CMD, change directory to the correct folder (the one created by the GitHub app for your repo)
- Here, create the app
    - ionic start
- Go through the steps provided here, you can use the wizard or proceed through Terminal/CMD
- This will create all the folders and files required for the app to work 

### Running an app
- In Terminal/CMD, change directory to the app folder (not the repo folder)
    - ionic serve
- This will launch a browser and show the app
- If this does not happen, check Terminal, it should show an IP address of the local server created
- You can copy that into the browser to show the app 

