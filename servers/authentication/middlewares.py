# this is the file which contains all the middlewares
from flask import jsonify, request, Response
from functools import wraps
from app import app, db, User

def authenticate_middleware(func):
    @wraps(func)
    def middleware(*args, **kwargs):
        
        auth_header = request.authorization['email']
        
        if not auth_header:
            return jsonify({'message':'auth header is missing'}), 400
        
        user = User.query.filter_by(email=auth_header)
        
        if not user:
            return Response('Authorisation failed', status=401)
        else:
            return func(*args, **kwargs)
        
        
    return middleware