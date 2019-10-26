from django.urls import path
from . import views
urlpatterns = [
    path('user/', views.UserListView.as_view()),
    path('user/<int:pk>', views.UserDetailView.as_view(), name='user-detail'),
    path('store/', views.StoreListView.as_view()),
    path('store/<int:pk>', views.StoreDetailView.as_view(), name='store-detail'),
    path('review/', views.ReviewListView.as_view()),
    path('review/<int:pk>', views.ReviewDetailView.as_view(), name='review-detail'),
    path('review-comment/', views.ReviewCommentView.as_view()),
  #  path('mystore/<int:pk>', views.MyStoreDetailView.as_view()),
]