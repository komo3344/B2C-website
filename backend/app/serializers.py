from rest_framework import serializers
from . models import User, Store, Review, Review_comment, \
                    Review_file


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'role_profile', 'user_type', 'email')


class StoreSerializer(serializers.ModelSerializer):
    current_user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())

    class Meta:
        model = Store
        fields = ('url', 'id', 'u_id', 'store_name', 'business_number', 'title', 'content', 'image', 'current_user')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('url', 'id', 's_id', 'u_id', 'comment', 'created_at', 'star_score')


class ReviewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_comment
        fields = ('url', 'id', 'r_id', 'u_id', 'comment', 'created_at')


class ReviewFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_file
        fields = ('url', 'id', 'r_id', 'filename', 'original_name', 'image')
