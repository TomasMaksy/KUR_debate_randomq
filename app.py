from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Define guest names in a global variable
GUESTS = ["Tomek Maksymowicz", "Edyta Maksymowicz", "Janek Wierbiel", "Walenty Wojniłło"]  # Update names here

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/guests')
def get_guests():
    return jsonify(GUESTS)  # Return guest names as JSON

if __name__ == '__main__':
    app.run(debug=True)
