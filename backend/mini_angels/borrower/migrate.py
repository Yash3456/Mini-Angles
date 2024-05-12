import os
import sys

def migrate(request):
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mini_angels.settings")
    from django.core.management import execute_from_command_line
    execute_from_command_line(["manage.py", "makemigrations"])
    execute_from_command_line(["manage.py", "migrate"])
    return {"status": "success"}
