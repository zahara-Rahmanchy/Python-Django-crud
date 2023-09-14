from rest_framework import serializers
from .models import stocks

class StockSerializers(serializers.ModelSerializer):
    class Meta:
        model =stocks
        fields = '__all__'