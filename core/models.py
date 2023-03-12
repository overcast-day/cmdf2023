from django.db import models

# Create your models here.

class Activities(models.Model):
    title = models.CharField(max_length=60)
    isChosen = models.BooleanField((""))

    def __str__(self):
        return self.title

class WorkTimes(models.Model):
    totalHours = models.IntegerField(range(0, 24))

    def __str__(self):
        return self.totalHours

class BreakIntervals(models.Model):
    intervalMinutes = models.IntegerField(range(0, 24*60))

    def __str__(self):
        return self.intervalMinutes