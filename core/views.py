from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *

# Create your views here.

def front(request):
    context = { }
    return render(request, "index.html", context)

@api_view(['GET', 'POST'])
def activity(request):

    if request.method == 'GET':
        activity = Activities.objects.all()
        serializer = ActivitySerializer(activity, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def workTime(request):

    if request.method == 'GET':
        workTime = WorkTimes.objects.all()
        serializer = WorkTimeSerializer(workTime, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = WorkTimeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)