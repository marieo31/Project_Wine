from flask import Flask, jsonify, render_template
import pandas as pd

app = Flask(__name__)

df= pd.read_csv("data/WineList_year_1000.csv", encoding="Latin-1")


@app.route("/")
def index():
    return render_template("taster.html")


@app.route("/data")
def data():
    data = df.to_dict(orient="records")
    return jsonify(data)

@app.route("/avg")
def avgpoi():
    avg_po= df.groupby("taster_twitter_handle").mean()['points']
    avg_pr= df.groupby("taster_twitter_handle").mean()['price']
    return jsonify(avg_po.to_dict())
    return jsonify(avg_pr.to_dict())

@app.route("/glu")
def glupt():
    avg_pr= df.groupby("taster_twitter_handle").mean()['price']
    return jsonify(avg_pr.to_dict())


if __name__ == "__main__":
    app.run(debug= True)