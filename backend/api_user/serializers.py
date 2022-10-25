from rest_framework import serializers

from django.contrib.auth.models import User
from api_auth import FinnlandsUser


class DjangoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')

class FinnlandsUserSerializer(serializers.ModelSerializer):
    django_user = DjangoUserSerializer()

    class Meta:
        model = FinnlandsUser
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
        ]