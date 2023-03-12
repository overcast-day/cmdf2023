from rest_framework import serializers
from .models import *

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activities
        fields = ('id', 'title', 'isChosen')

class WorkTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkTimes
        fields = ('id', 'totalHours')

class BreakIntervalSerializer(serializers.ModelSerializer):
    class Meta:
        model = BreakIntervals
        fields = ('id', 'intervalMinutes')