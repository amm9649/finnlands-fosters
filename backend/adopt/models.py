from django.db import models

class AdoptableCat(models.Model):
	SEX_CHOICES = [('M', 'male'), ('F', 'female')]
	HEALTH_CHOICES = [('H', 'healthy'), ('C', 'has a condition, no adverse effects'), ('A', 'has a condition with adverse effects')]

	finnId = models.IntegerField(primary_key=True, name='Finn ID')
	name = models.CharField(max_length=40, name='Name')
	hasDistemperShots = models.BooleanField(default=False, name='Distemper')
	hasRabiesVax = models.BooleanField(default=False, name='Rabies')
	snapTested = models.BooleanField(default=False, name='SNAP')
	isFixed = models.BooleanField(default=False, name='Fixed')
	isAvailable = models.BooleanField(default=False, name='Available')
	birthDate = models.DateField(name='Date of Birth')
	intakeDate = models.DateField(name='Intake Date')
	adoptDate = models.DateField(blank=True, null=True, name='Adoption Date')
	deathDate = models.DateField(blank=True, null=True, name='Date of Death')
	coatDescription = models.TextField(name='Appearance')
	genDescription = models.TextField(name='Personality')
	adoptedName = models.CharField(max_length=40, blank=True, name='Name after Adoption')
	adoptionFee = models.PositiveSmallIntegerField(blank=True, name='Adoption Fee')
	sex = models.CharField(max_length=1, choices=SEX_CHOICES, name='Sex')
	healthConditionStatus = models.CharField(max_length=1, choices=HEALTH_CHOICES, default='H', name='Health Condition Status')
	
	def __str__(self):
		return self.name + " (id: %s)"%(self.finnId)

class CatPicture(models.Model):
	cats = models.ForeignKey(AdoptableCat, related_name='pictures', on_delete=models.SET_NULL, null=True)
	image = models.ImageField()
	title = models.TextField()
	caption = models.TextField(blank=True)

	def __str__(self):
		return self.title