from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from flask_cors import CORS
import hashlib

def generate_hash_password(password):
    password_bytes = password.encode('utf-8')
    sha256_hash = hashlib.sha256()
    sha256_hash.update(password_bytes)
    hashed_password = sha256_hash.hexdigest()

    return hashed_password

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db = SQLAlchemy(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    education_level = db.Column(db.String())
    gender = db.Column(db.String())
    
    def __repr__(self):
        return f'<User {self.email}>'

@app.route('/')
def home():
    return jsonify({'message':'success', 'purpose':'authentication'})

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    data_from_api = request.get_json() 
       
    username = data_from_api.get('username')
    password = data_from_api.get('password')
    email = data_from_api.get('email')
    education_level = data_from_api.get('education')
    gender = data_from_api.get('gender')

    try:
        user = User(username=username, password=generate_hash_password(password), email=email, education_level=education_level, gender=gender)
        db.session.add(user)
        db.session.commit()
    except:
        return jsonify({'message':'internal_server_error'}), 500
 
    return jsonify({'message':'user_created_successfully'}), 200

@app.route('/login', methods=['GET', 'POST'])
def login():
    data_from_api = request.get_json()
    
    email = data_from_api.get('email')
    password = data_from_api.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user or user.password != generate_hash_password(password):
        return jsonify({'message':'invalid user'})
    
    return jsonify({'message':'user logged in successfully', 'user':user.email})


if __name__ == "__main__":
    app.run(debug=True)
