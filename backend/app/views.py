from rest_framework import generics
from . import models
from . import serializers
from .permissions import IsOwnerOrReadOnly


class UserList(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class StoreList(generics.ListCreateAPIView):    # 전체 가게리스트
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class StoreDetail(generics.RetrieveUpdateDestroyAPIView):   # 가게 정보 수정
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class MyStoreDetail(generics.ListCreateAPIView):    # 자신의 가게만 보여줌
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer

    def get_queryset(self):
        return super().get_queryset().filter(u_id=self.request.user)


class ReviewList(generics.ListCreateAPIView):   # 댓글 리스트
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class StoreReviewList(generics.ListAPIView):   # 해당가게 댓글 리스트
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    lookup_url_kwarg = 's_id'

    def get_queryset(self):
        s_id = self.kwargs.get(self.lookup_url_kwarg)  # api 요청시 value 값 받음 - /review/store/<value>
        review = models.Review.objects.filter(s_id=s_id)
        return review


class StoreReviewCommentList(generics.ListAPIView):   # 해당가게 대댓글 리스트
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    lookup_url_kwarg = 's_id'

    def get_queryset(self):
        s_id = self.kwargs.get(self.lookup_url_kwarg)  # api 요청시 value 값 받음 - /review/store/<value>
        review_comment = models.Review_comment.objects.filter(s_id=s_id)
        return review_comment


class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):  # 댓글 수정
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewComment(generics.ListCreateAPIView):    # 사장님 답글
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewCommentSerializer


class ReviewCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewCommentSerializer


class ReviewFile(generics.ListCreateAPIView):
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewFileSerializer


class ReviewFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewFileSerializer
