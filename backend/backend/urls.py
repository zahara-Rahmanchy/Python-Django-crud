"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include
from django.urls import path
from myjsonModel import views
from sqlModel.views import StocksView
# from sqlModel.views import StockDataAPIView
from rest_framework import routers
# from sqlModel.views import TradeCodeListView

route = routers.DefaultRouter()
route.register("",StocksView,basename='stocksview')
# route.register('stock-data', StockDataAPIView,basename='stockdata') 

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include(route.urls)),
    # path('api/all/', StocksView.as_view({'get': 'all'}), name='all-trade-codes'),
    path('', views.get_home, name='get_home'),
    # path('api/all-trade-codes/', TradeCodeListView.as_view(), name='all-trade-codes'),

    path('get-stock-market-jsondata/', views.get_stock_market_jsondata, name='get_stock_market_jsondata'),
]
