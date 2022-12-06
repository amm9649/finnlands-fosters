from django.urls import path, include
from rest_framework.authtoken import views

from .views import RegisterView

# api/accounts/
urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', RegisterView.as_view(), name='auth_register')
    #path('auth/register/', include('dj_rest_auth.registration.urls')),
]