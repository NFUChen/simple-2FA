from flask import Flask
from flask_cors import CORS
from two_factor_auth import TwoFactorAuth

app = Flask(__name__)
CORS(app)
auth = TwoFactorAuth()

@app.route("/index")
def index():
    return "Welcom to the two factor authentication server"

@app.route("/auth")
def get_auth():
    return auth.to_dict()

@app.route("/pwd/<password>")
def check_password(password):
    return {
        "is_valid": auth.is_valid_password(str(password))
    }
    


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug= False, port= 8080)
