from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import (
	CreateAPIView,
	RetrieveAPIView,
	ListAPIView,
	UpdateAPIView,
	DestroyAPIView
)
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser
from adopt.models import AdoptableCat, CatPicture
from adopt.serializers import AdoptableCatSerializer, CatPictureSerializer
from adopt.permissions import IsAdoptableEditor

# Create
class AddAdoptableView(CreateAPIView):
	queryset = AdoptableCat.objects.all()
	serializer_class = AdoptableCatSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		adoptable = self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
	def perform_create(self, serializer):
		adoptable = serializer.save()
		return adoptable

class AddPictureView(CreateAPIView):
	queryset = CatPicture.objects.all()
	serializer_class = CatPictureSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		adoptable = self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
	def perform_create(self, serializer):
		picture = serializer.save()
		return picture

# Retrieve
class AdoptableDetailView(RetrieveAPIView):
	queryset = AdoptableCat.objects.all()
	serializer_class = AdoptableCatSerializer
	permission_classes = [AllowAny]
class PictureDetailView(RetrieveAPIView):
	queryset = CatPicture.objects.all()
	serializer_class = CatPictureSerializer
	permission_classes = [AllowAny]
class ListAdoptablesView(ListAPIView):
	queryset = AdoptableCat.objects.all().filter(isAvailable=True)
	serializer_class = AdoptableCatSerializer
	permission_classes = [AllowAny]
class ListPicturesView(ListAPIView):
	queryset = CatPicture.objects.all()
	serializer_class = CatPictureSerializer
	permission_classes = [AllowAny]

# Update
class UpdateAdoptableView(UpdateAPIView):
	queryset = AdoptableCat.objects.all()
	serializer_class = AdoptableCatSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]
class UpdatePictureView(UpdateAPIView):
	queryset = CatPicture.objects.all()
	serializer_class = CatPictureSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]

# Destroy
class RemoveAdoptableView(DestroyAPIView):
	queryset = AdoptableCat.objects.all()
	serializer_class = AdoptableCatSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]
class RemovePictureView(DestroyAPIView):
	queryset = CatPicture.objects.all()
	serializer_class = CatPictureSerializer
	permission_classes = [IsAdoptableEditor|IsAdminUser]