from rest_framework import serializers
from . models import Store


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('store_name', 'business_number', 'title', 'content')
