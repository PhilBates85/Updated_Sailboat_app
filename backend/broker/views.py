from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Broker
from .serializers import BrokerSerializer

class BrokerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Broker.objects.all()
    serializer_class = BrokerSerializer
    pagination_class = None

class BrokerView(RetrieveAPIView):
    queryset = Broker.objects.all()
    serializer_class = BrokerSerializer

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Broker.objects.filter(top_seller=True)
    serializer_class = BrokerSerializer
    pagination_class = None