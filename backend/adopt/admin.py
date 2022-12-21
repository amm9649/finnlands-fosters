from django.contrib import admin
from .models import AdoptableCat, CatPicture

class CatPictureInline(admin.TabularInline):
	model = CatPicture

@admin.register(AdoptableCat)
class AdoptableCatAdmin(admin.ModelAdmin):
	list_display = ('finnId', 'name', 'sex', 'isFixed', 'intakeDate', 'isAvailable')
	list_filter = ('isAvailable', 'sex', 'intakeDate', 'adoptDate')
	fieldsets = (
		(None, {'fields':('finnId', 'name', 'sex', 'isAvailable', 'birthDate', 'intakeDate', 'deathDate')}),
		('Vetting', {'fields':('hasDistemperShots', 'hasRabiesVax', 'snapTested', 'isFixed', 'healthConditionStatus')}),
		('Description', {'fields':('coatDescription', 'genDescription')}),
		('Adoption Data', {'fields':('adoptDate', 'adoptedName', 'adoptionFee')}),
		)
	inlines = [CatPictureInline]

@admin.register(CatPicture)
class CatPictureAdmin(admin.ModelAdmin):
	pass