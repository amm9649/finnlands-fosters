from django.urls import include, path, re_path
from django.views.generic import RedirectView, TemplateView

urlpatterns = [
    re_path(r'^dj-rest-auth/', include('dj_rest_auth.urls')),
    re_path(r'^dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]