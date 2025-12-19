from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='.', template_folder='.')

@app.route("/")
def home():
    return render_template("index.html")

# Example other routes
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

# Serve static files
@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory('.', filename)
