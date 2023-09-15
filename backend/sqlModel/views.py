from django.shortcuts import render
from .models import stocks
from .serializers import StockSerializers
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
# Create your views here.

class StocksView(viewsets.ModelViewSet):
     queryset = stocks.objects.all()
     serializer_class = StockSerializers

     def list(self, request):
        # Get the 'trade_code' query parameter from the URL
        trade_code = request.query_params.get('trade_code')
        
        # to get the trade codes
        if trade_code== 'all':
            unique_trade_codes = stocks.objects.values('trade_code').distinct()
            trade_codes = [item['trade_code'] for item in unique_trade_codes]
            
            return Response(trade_codes, status=status.HTTP_200_OK)
        # Filter the queryset based on 'trade_code'
        if trade_code:
            queryset = stocks.objects.filter(trade_code=trade_code).order_by('date')
        else:
            queryset = self.queryset

        # Serialize the data for the response
        serializer = StockSerializers(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

     def update(self, request, *args, **kwargs):
       
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

