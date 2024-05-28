from django.urls import path
from . import views

"""
tengo que acerlo con cada template que tenga
llevo index
"""

urlpatterns = [
    path('', views.index, name='index'),
]
