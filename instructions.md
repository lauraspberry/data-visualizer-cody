

# Initial Setup 


### React Setup
reference: https://github.com/facebook/create-react-app

navigate to a directory where you want your code to be on your local computer. then run: 
```
npx create-react-app data-visualizer
cd data-visualizer
npm start
```
note: you can replace data-visualizer in the above commands with whatever you want the name of your app to be!

now, http://localhost:3000/ should open and you'll see the starter react page.
<img width="548" alt="Screenshot 2023-12-30 at 8 02 38 PM" src="https://github.com/lauraspberry/data-visualizer-cody/assets/51841883/94296a8f-4ea5-4e7c-86f1-03b824281791">


open vs code and open this folder that was created, called data-visualizer. if you open src/App.js, you can edit the page! 

### Add a Nivo Graph to your React App
- Find the graph you want on https://nivo.rocks/components/
  - Should work as long as it has an SVG option (ex: bar, pie, bump). Click into SVG
  - Note: Line graph is broken
- Ex: let’s say I picked https://nivo.rocks/radar/
- Download that library locally. Find the library (ex: @nivo/radar) and install it by running `npm install @nivo/radar` in your terminal
- Start your local app if you haven’t already by running `npm start`
- Let’s display the graph!
  - Add the component for the Radar graph
    - Create local directory: `/radar`
    - Create two files in that directory: `Radar.js` and `radar-data.json`
    - Copy files from Nivo
      - Code tab → `Radar.js`
      - Data tab → `radar-data.json`
    - Add an export at the end of the component file (for me, `Radar.js` )
      - `export default MyResponsiveRadar;`
  - Use the Radar component in your App
    - Import your component and data
      - `import MyResponsiveRadar from './radar/Radar;`
      - `import radarData from './radar/radar-data.json';`
    - Add the component into your App
      - <MyResponsiveRadar data={radarData}></MyResponsiveRadar>
    Give graph a height by encasing it with a div
      ```
      <div className='graph-container'>
                    <MyResponsiveRadar data={radarData}></MyResponsiveRadar>
      </div>
      ```
      
      - If you haven’t already, add the CSS so that 'graph-container' has a set height. You can add this to `App.css`. 
      ```
      .graph-container {
        height: 600px;
      }
      ```
- Now, the graph should be displayed on your local app! 

### Navigate the JSON 
there's quite a lot of data lol so when looking thru the json to figure out what categories we want to visualize i'd recommend copying the data from https://overfast-api.tekrop.fr/players/jotter-1459 into something like https://jsonformatter.org/json-pretty-print because its easier to read and you can collapse each dictionary


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
