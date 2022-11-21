from flask import Flask

app = Flask(__name__)
# go into backend folder and run below in terminal:
# python3 -m venv venv
# . venv/bin/activate
# pip install Flask

# for running the server:
# flask --app app run


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"