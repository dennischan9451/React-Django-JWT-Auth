from django.conf.urls import url
from django.urls import path, include
from .api import RegisterApi

urlpatterns = [
      path('api/register', RegisterApi.as_view()),
]