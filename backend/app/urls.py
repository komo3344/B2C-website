from django.urls import path, include

from .serializers import MyRegistrationView
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('rest-auth/registration/signup/', MyRegistrationView.as_view()),
    path('user/', views.UserList.as_view()),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user-detail'),
    path('store/', views.StoreList.as_view()),
    path('store/<int:pk>', views.StoreDetail.as_view(), name='store-detail'),
    path('mystore/', views.MyStoreDetail.as_view()),

    path('review/', views.ReviewList.as_view()),
    path('review/<int:pk>', views.ReviewDetail.as_view(), name='review-detail'),
    path('review-comment/', views.ReviewComment.as_view()),
    path('review-comment/<int:pk>', views.ReviewCommentDetail.as_view(), name='review_comment-detail'),

    path('review/store/<int:s_id>', views.StoreReviewList.as_view()),  # 해당가게의 댓글
    path('review-comment/store/<int:s_id>', views.StoreReviewCommentList.as_view()),  # 해당가게의 대댓글

    path('review-file/', views.ReviewFile.as_view()),
    path('review-file/<int:pk>', views.ReviewFileDetail.as_view(), name='review_file-detail'),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
