from django.shortcuts import render
from .models import stocks
from .serializers import StockSerializers
from rest_framework import viewsets
# Create your views here.

class StocksView(viewsets.ModelViewSet):
     queryset = stocks.objects.all()
     serializer_class = StockSerializers
