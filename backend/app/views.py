from rest_framework import generics
from . import models
from . import serializers
from .permissions import IsOwnerOrReadOnly
from .models import User


class UserListView(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class StoreListView(generics.ListCreateAPIView):
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


# class MyStoreDetailView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = [IsOwnerOrReadOnly]
#     queryset = models.Store.objects.filter(u_id=User.id)
#     serializer_class = serializers.StoreSerializer


class StoreDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Store.objects.all()
    serializer_class = serializers.StoreSerializer


class ReviewListView(generics.ListCreateAPIView):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer


class ReviewCommentView(generics.ListCreateAPIView):
    queryset = models.Review_comment.objects.all()
    serializer_class = serializers.ReviewCommentSerializer
