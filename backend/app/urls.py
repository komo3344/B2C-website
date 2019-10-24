from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('store/', views.StoreListView.as_view()),

]