from django.contrib import admin
from .models import FinnlandsUser

@admin.register(FinnlandsUser)
class FinnlandsUserAdmin(admin.ModelAdmin):
	pass