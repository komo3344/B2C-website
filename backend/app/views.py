from rest_framework import generics
from . import models
from . import serializers
from .permissions import IsOwnerOrReadOnly


class UserListView(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class StoreListView(generics.ListCreateAPIView):    # 전체 가게리스트
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class StoreDetailView(generics.RetrieveUpdateDestroyAPIView):   # 가게 정보 수정
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class MyStoreDetailView(generics.ListCreateAPIView):    # 자신의 가게만 보여줌
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer

    def get_queryset(self):
        return super().get_queryset().filter(u_id=self.request.user)


class ReviewListView(generics.ListCreateAPIView):   # 댓글 리스트
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):  # 댓글 수정
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewCommentView(generics.ListCreateAPIView):    # 사장님 답글
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewCommentSerializer


