from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


class User():
    id = int()
    name = str()
    passw = str()
    
usersBase = []

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],  # Replace with your actual frontend origin
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get("/{name}/{passw}")
def index(name,passw):
    newUser = User()
    newUser.name = name
    newUser.passw = passw
    if newUser in usersBase:return True
    else:return False
@app.get("/add/{name}/{passw}")
def add(name,passw):
    newUser = User()
    newUser.name = name
    newUser.passw = passw
    usersBase.append(newUser)
    if(newUser in usersBase):return True
    else:return False