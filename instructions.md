

# Initial Setup 


### React Setup
reference: https://github.com/facebook/create-react-app

navigate to a directory where you want your code to be on your local computer. then run: 
```
npx create-react-app data-visualizer
cd data-visualizer
npm start
```

now, http://localhost:3000/ should open and you'll see the starter react page.
<img width="548" alt="Screenshot 2023-12-30 at 8 02 38 PM" src="https://github.com/lauraspberry/data-visualizer-cody/assets/51841883/94296a8f-4ea5-4e7c-86f1-03b824281791">


open vs code and open this folder that was created, called data-visualizer. if you open src/App.js, you can edit the page! 


##### Pushing this directory to GitHub 
reference: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

```
git init -b main
git add .
git commit -m "First commit"
```

go to github and create a new repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
"To avoid errors, do not initialize the new repository with README, license, or gitignore files"
```
git remote add origin REMOTE-URL https://github.com/lauraspberry/data-visualizer-cody.git
git push -u origin main
```

refresh the github page and your code should be there now! 
