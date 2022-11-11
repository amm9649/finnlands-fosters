from django.urls import path, include
from rest_framework.authtoken import views

# accounts/
urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('auth/token/', views.obtain_auth_token),
]
