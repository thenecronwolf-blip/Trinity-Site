from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='.', template_folder='.')

# Routes for each page
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/housing-insurance")
def housing():
    return render_template("housing-insurance.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

# Serve static files (CSS, JS, images)
@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory('.', filename)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
