from django.db import models

class RaffleItem(models.Model):
	name = models.CharField(max_length=200)
	description = models.TextField()

class RaffleItemPicture(models.Model):
	item = models.ForeignKey(RaffleItem, related_name='picture', on_delete=models.CASCADE)
	image = models.ImageField()

class Raffle(models.Model):
	item = models.ForeignKey(RaffleItem, related_name='raffle', on_delete=models.CASCADE)
	ticketPrice = models.PositiveSmallIntegerField()
	startDate = models.DateField(blank=True, null=True)
	endDate = models.DateField()
