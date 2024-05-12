from django.urls import path
from . import views
urlpatterns = [
    path('', views.quiz),
    path('converter', views.converter),
    path('calculator', views.calculator)
]