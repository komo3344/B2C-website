from django.urls import path
from . import views
urlpatterns = [
    path('user/', views.UserListView.as_view()),
    path('store/', views.StoreListView.as_view()),
    path('store/<int:pk>', views.StoreDetailView.as_view(), name='store-detail'),
    path('review/', views.ReviewListView.as_view()),
    path('review/<int:pk>', views.ReviewDetailView.as_view(), name='review-detail'),
    path('review-comment/', views.ReviewCommentView.as_view()),
]