from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
import json

def get_stock_market_jsondata(request):
    # Load and read the JSON data from the file
    with open('stock_market_data.json', 'r') as json_file:
        data = json.load(json_file)

    return JsonResponse(data,safe=False)
