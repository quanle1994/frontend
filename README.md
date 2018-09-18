# Frontend Setup
> Instructions to install dependencies and run frontend development environment.

### Directory
    .
    ├── create-react-app        # For installing dependencies, you can delete after install
    └── frontend                # Actual development environment
         ├── other files...     # Stores App.js, components/, etc..
         └── (to be updated)

### Install Create-React-App (only for dependencies)
Link: https://github.com/IS3106-T07/create-react-app  

    git clone https://github.com/IS3106-T07/create-react-app  
    cd create-react-app  
    npm install  

### Install Frontend
Link: Current Page

    cd ..
    git clone https://github.com/IS3106-T07/frontend
    cd frontend
    npm install

### Testing
    npm test

### Run
    npm start

Running at http://localhost:3003 (and at specified IP network address, e.g. 192.168.1.40:3003)

# FAQ
> Frequently asked questions.

### Q. I'm stuck at registry config, on install. How to proceed?
Set config manually.

    npm config set registry="http://registry.npmjs.org"

### Q. Where is the PWA Setup Guide?
See MANUAL.md.