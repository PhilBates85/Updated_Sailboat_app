from django.urls import path
from .views import ContactCreateView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', csrf_exempt(ContactCreateView.as_view())),
]
