# Mini Angels Backend Server

## Prerequisites
- Have Python 3.x installed
- Have Python 3 pip installed
- Have required Python packages installed
   ```bash
   python -m pip install django djangorestframework django-cors-headers django-crispy-forms sinch
   ```

## Running the Server
1. Clone this repository:
   ```bash
   git clone https://github.com/Yash3456/Mini-Angles.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Mini-Angels/backend/mini_angels
   ```
3. Initialize the Database:
   ```bash
   python3 manage.py makemigrations
   python3 manage.py migrate
   ```
4. Run Mini Angel Django backend server:
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```
