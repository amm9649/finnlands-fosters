from django.db import models

class AdoptableCat(models.Model):
	SEX_CHOICES = [('M', 'male'), ('F', 'female')]
	HEALTH_CHOICES = [('H', 'healthy'), ('C', 'has a condition, no adverse effects'), ('A', 'has a condition with adverse effects')]

	finnId = models.IntegerField(primary_key=True)
	name = models.CharField(max_length=40)
	hasDistemperShots = models.BooleanField(default=False)
	hasRabiesVax = models.BooleanField(default=False)
	snapTested = models.BooleanField(default=False)
	isFixed = models.BooleanField(default=False)
	isAvailable = models.BooleanField(default=False)
	birthDate = models.DateField()
	intakeDate = models.DateField()
	adoptDate = models.DateField(blank=True, null=True)
	deathDate = models.DateField(blank=True, null=True)
	coatDescription = models.TextField()
	genDescription = models.TextField()
	adoptedName = models.CharField(max_length=40, blank=True)
	adoptionFee = models.PositiveSmallIntegerField()
	sex = models.CharField(max_length=1, choices=SEX_CHOICES)
	healthConditionStatus = models.CharField(max_length=1, choices=HEALTH_CHOICES, default='H')

	def __str__(self):
		return self.name + " (id: %s)"%(self.finnId)

class CatPicture(models.Model):
	cats = models.ManyToManyField(AdoptableCat)
	image = models.ImageField()
	caption = models.TextField()

	def __str__(self):
		return self.caption