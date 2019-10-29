from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('user/', views.UserListView.as_view()),
    path('user/<int:pk>', views.UserDetailView.as_view(), name='user-detail'),
    path('store/', views.StoreListView.as_view()),
    path('store/<int:pk>', views.StoreDetailView.as_view(), name='store-detail'),
    path('mystore/', views.MyStoreDetailView.as_view()),
    path('review/', views.ReviewListView.as_view()),
    path('review/<int:pk>', views.ReviewDetailView.as_view(), name='review-detail'),
    path('review-comment/', views.ReviewCommentView.as_view()),
]
urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)