from django.urls import path
from .views import BrokerListView, BrokerView, TopSellerView

urlpatterns = [
    path('', BrokerListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', BrokerView.as_view()),
]