import time
from flask import Flask
from overwatch import Overwatch

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/overwatch')
def get_overwatch_stats():
    print("start")
    overwatch = Overwatch(battletag="Okush#11324")
    print("overwatch object:",overwatch(hero="dva", filter="combat"))
    print("playtime:",overwatch.playtime)
    return {'playtime': overwatch.playtime}

