from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _
from rest_framework.authtoken.models import Token

from .managers import FinnlandsUserManager

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class FinnlandsUser(AbstractUser):
	username = None
	email = models.EmailField(_('email address'), unique=True)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []

	objects = FinnlandsUserManager()

	def __str__(self):
		return self.email

#class Adopter(models.Model):
#	user = models.ForeignKey(FinnlandsUser, related_name='adopter-profile', on_delete=models.CASCADE)