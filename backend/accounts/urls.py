from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from accounts import views

# api/accounts/
urlpatterns = [
    path('profile/', views.ProfileView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)