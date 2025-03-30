from django.urls import path
from .views import (
    CategoryListCreateView, CategoryDetailView, 
    ProductListCreateView, ProductDetailView
)
from .views import signup, login, logout


urlpatterns = [
    #category endpoints
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-details'),


    #product endpoints
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product-details'),

    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
]
