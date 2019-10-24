from django.shortcuts import render
from rest_framework import generics
from . import models
from . import serializers


class StoreListView(generics.ListCreateAPIView):
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer