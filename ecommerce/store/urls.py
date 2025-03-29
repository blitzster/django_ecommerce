from django.urls import path
from .views import (
    CategoryListCreateView, CategoryDetailView, 
    ProductListCreateView, ProductDetailView
)


urlpatterns = [
    #category endpoints
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-details'),


    #product endpoints
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product-details'),
]
