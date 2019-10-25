from rest_framework import generics
from . import models
from . import serializers
from .permissions import IsOwnerOrReadOnly


class UserListView(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class StoreListView(generics.ListAPIView):
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class StoreDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class ReviewListView(generics.ListAPIView):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewCommentView(generics.ListCreateAPIView):
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewCommentSerializer