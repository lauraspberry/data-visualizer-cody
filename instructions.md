

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

### Flask Setup  
setting up flask backend w a react app:
https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

install flask if you haven't already 
```
pip install flask python-dotenv
```

then, make an API dir: 
```
$ mkdir api
$ cd api
```

In the API folder, create a single file called _api.py_:
```
import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
```

now you can run `flask run` from the `api` directory. with no errors, the terminal should look like this:
<img width="500" alt="Screenshot 2023-12-30 at 8 02 16 PM" src="https://github.com/lauraspberry/data-visualizer-cody/assets/51841883/c437c1f1-cb60-43a2-853d-a693822fdac0">


now, we need to configure the react app to connect to flask. find package.json and add a proxy key: 
```
  "proxy": "http://localhost:5000"
```
"When you do this, do not forget to add a comma at the end of the previous line, as without that comma the file would not be a valid JSON file."

add ```__pycache__``` to the .gitignore file that should alr be there

now add a few lines to the frontend that call our API and fetch the time. 
<img width="545" alt="Screenshot 2023-12-30 at 8 01 54 PM" src="https://github.com/lauraspberry/data-visualizer-cody/assets/51841883/f6a3b838-7a39-42b1-be59-dd9c1d87e2dc">


now, commit your changes to git! 



# Implementing Python Wrappers 

experimental

```
pip install python-overwatch

pip install riotwatcher
```

