from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/level1')
def first_level():
    return render_template('first_level.html')


@app.route('/level2')
def second_level():
    return render_template('second_level.html')


if __name__ == '__main__':
    app.run()