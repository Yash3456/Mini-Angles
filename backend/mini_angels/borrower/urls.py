from django.urls import path
from . import views

urlpatterns = [
    path('verify_mobile/', views.verify_mobile, name='verify_mobile'),
    path('verify_otp/', views.verify_otp, name='verify_otp'),
    path('save_profile/', views.save_profile, name='save_profile'),
    path('loan_application/', views.loan_application, name='loan_application'),
]