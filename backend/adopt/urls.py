from django.urls import path, include
from rest_framework.authtoken import views
from adopt.views import (
    AddAdoptableView,
    AddPictureView,
    AdoptableDetailView,
    PictureDetailView,
    ListAdoptablesView,
    ListPicturesView,
    UpdateAdoptableView,
    UpdatePictureView,
    RemoveAdoptableView,
    RemovePictureView
)

# adopt/
urlpatterns = [
    path('cats', ListAdoptablesView.as_view()),
    path('cats/add', AddAdoptableView.as_view()),
    path('cats/<int:pk>', AdoptableDetailView.as_view(), name='adoptablecat-detail'),
    path('cats/<int:pk>/update', UpdateAdoptableView.as_view()),
    path('cats/<int:pk>/remove', RemoveAdoptableView.as_view()),
    path('pictures', ListPicturesView.as_view()),
    path('pictures/add', AddPictureView.as_view()),
    path('pictures/<int:pk>', PictureDetailView.as_view(), name='catpicture-detail'),
    path('pictures/<int:pk>/update', UpdatePictureView.as_view()),
    path('pictures/<int:pk>/remove', RemovePictureView.as_view()),
]