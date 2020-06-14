from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'boat_type', 'address', 'city', 'state', 'price', 'sale_type', 'berths', 'bathrooms', 'length', 'photo_main', 'slug')

class listingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'