from rest_framework import serializers
from adopt.models import AdoptableCat, CatPicture

class CatPictureSerializer(serializers.HyperlinkedModelSerializer):
	image = serializers.ImageField()
	caption = serializers.CharField(allow_blank=True)
	cats = serializers.HyperlinkedRelatedField(many=True, view_name='adoptablecat-detail', format='html', queryset=AdoptableCat.objects.all())
	class Meta:
		model = CatPicture
		fields = ('url', 'image', 'caption', 'cats')

	def create(self, form):
		image, caption = form.get('image'), form.get('caption')
		picture = CatPicture.objects.create(image=image, caption=caption)
		picture.save()

		#catids = form.get('cats')
		#catids = [cat.pk for cat in catids]
		#cats = AdoptableCat.objects.filter(pk__in=catids)
		#for c in catids:
		#	picture.cats.add(c)
		
		return picture

class AdoptableCatSerializer(serializers.HyperlinkedModelSerializer):
	finnId = serializers.CharField(max_length=5, label="Finn ID")
	name = serializers.CharField(max_length=40, label="Name")
	hasDistemperShots = serializers.BooleanField(default=False, label="Received Distemper")
	hasRabiesVax = serializers.BooleanField(default=False, label="Received Rabies Vaccine")
	snapTested = serializers.BooleanField(default=False, label="SNAP Tested")
	isFixed = serializers.BooleanField(default=False, label="Spayed/Neutered")
	isAvailable = serializers.BooleanField(default=False, label="Available for Adoption")
	birthDate = serializers.DateField(allow_null=True, label="Date of Birth")
	intakeDate = serializers.DateField(allow_null=True, label="Date of Intake")
	adoptDate = serializers.DateField(allow_null=True, label="Date of Adoption")
	deathDate = serializers.DateField(allow_null=True, label="Date of Death")
	coatDescription = serializers.CharField(allow_blank=True, label="Appearance")
	genDescription = serializers.CharField(allow_blank=True, label="Description")
	adoptedName = serializers.CharField(max_length=40, allow_blank=True, label="Name after Adoption")
	adoptionFee = serializers.IntegerField(label="Adoption Fee")
	sex = serializers.CharField(max_length=1, label='Sex (M, F)')
	healthConditionStatus = serializers.CharField(max_length=1, label='Health Status (H, C, A)')
	pictures = serializers.HyperlinkedRelatedField(many=True, view_name='catpicture-detail', read_only=True, allow_null=True)

	class Meta:
		model = AdoptableCat
		fields = (''
			'url', 'finnId', 'name', 'hasDistemperShots', 'hasRabiesVax', 'snapTested', 'isFixed',
			'isAvailable', 'birthDate', 'intakeDate', 'adoptDate', 'deathDate', 'coatDescription',
			'genDescription', 'adoptedName', 'adoptionFee', 'sex', 'healthConditionStatus', 'pictures')

	def create(self, validated_data):
		return AdoptableCat.objects.create(**validated_data)
