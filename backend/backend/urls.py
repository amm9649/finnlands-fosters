from django.contrib import admin
from django.urls import path, include
#from .social.py import FacebookLogin, FacebookConnect, GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api_user/', include("api_user.urls")),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
    #path('dj-rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login')
    #path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login')
    #path('dj-rest-auth/facebook/connect/', FacebookConnect.as_view(), name='fb_connect')
]