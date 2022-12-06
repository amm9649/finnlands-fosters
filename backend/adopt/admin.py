from django.contrib import admin
from .models import AdoptableCat, CatPicture

class CatPictureInline(admin.TabularInline):
	model = CatPicture

@admin.register(AdoptableCat)
class AdoptableCatAdmin(admin.ModelAdmin):
	list_display = ('Finn ID', 'Name', 'Sex', 'Fixed', 'Intake Date', 'Available')
	list_filter = ('Available', 'Sex', 'Intake Date', 'Adoption Date')
	fieldsets = (
		(None, {'fields':('Finn ID', 'Name', 'Sex', 'Available')}),
		(None, {'fields':('Date of Birth', 'Intake Date', 'Date of Death')}),
		('Vetting', {'fields':('Distemper', 'Rabies', 'SNAP', 'Fixed', 'Health Condition Status')}),
		('Description', {'fields':('Appearance', 'Personality')}),
		('Adoption Data', {'fields':('Adoption Date', 'Name after Adoption', 'Adoption Fee')}),
		)
	inlines = [CatPictureInline]

@admin.register(CatPicture)
class CatPictureAdmin(admin.ModelAdmin):
	pass