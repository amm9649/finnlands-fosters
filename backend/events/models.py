from django.db import models

class Location(models.Model):
	name = models.CharField(max_length=200)

class Event(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField()
	startTime = models.DateTimeField()
	endTime = models.DateTimeField()
	location = models.ForeignKey(Location, related_name='events', on_delete=models.CASCADE)
