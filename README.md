# django-react-boilerplate

## Overview

This is a boilerplate for a Django backend with a React frontend.
It is designed to be a starting point for a full-stack web application.
Session based authentication is already implemented, so you don't need to worry about it.
With efficiency and simplicity in mind, this boilerplate is perfect for a quick start to any website project. </br>

Technologies used:
 - [Django](https://www.djangoproject.com) (backend)
 - [Django REST framework](https://www.django-rest-framework.org) (backend, REST API)
 - [Django-cors-headers](https://pypi.org/project/django-cors-headers/) (backend, cross-origin resource sharing) - to allow ajax requests from the frontend
 - [React](https://react.dev) (frontend)
 - [Vite](https://vite.dev) (frontend, development server)
 - [Axios](https://axios-http.com) (frontend, ajax requests)
 - [React-router](https://reactrouter.com) (frontend, routing)
 - [SQLite](https://www.sqlite.org) (default database)


## Setup

Disclaimer: The installation steps below have only been tested for Unix-based systems. If you are using Windows, they are not guaranteed to work.

Prerequisites: </br>
    - [Git](https://git-scm.com) </br>
    - [Python](https://www.python.org) - Version 3 </br>
    - [Node.js](https://nodejs.org/en) </br>
    - [pnpm](https://pnpm.io) (Used for installing node packages, but you should also be able to use npm or yarn) </br>

1. Clone the repository

```sh
git clone https://github.com/atudorcarsin/django-react-boilerplate.git
cd django-react-boilerplate
```

1. Set up the backend

```sh
cd backend
python3 -m venv venv
source venv/bin/activate  # If you are using Windows, check the Python venv documentation for activating the virtual environment 
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # This command is required to create an admin user
python manage.py runserver
```

2. Set up the frontend. Open a new terminal in the root directory of the project and run the following commands:

```sh
cd frontend
pnpm install
pnpm run dev
```

That's it! The Vite server should be listening on its configured address and port (check terminal for details).
If you want to access the Django admin panel, go to the configured url for Django (should also be displayed when you start the Django server) 
and log in with the superuser credentials you created earlier. </br>

You can now use this boilerplate as the foundation for your web application. </br>

## Contributing

If you have any suggestions or improvements, feel free to open an issue or a pull request. </br>