from django.urls import path
from . import views

urlpatterns = [
    path('save_profile/', views.save_profile, name='save_profile'),
]