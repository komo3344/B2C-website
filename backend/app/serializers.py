from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.registration.views import RegisterView
from rest_framework import serializers
from .models import User, Store, Review, Review_comment, \
    Review_file


class MyRegistrationSerializer(RegisterSerializer):
    Business = serializers.BooleanField(required=False)

    def custom_signup(self, request, user):
        if self.validated_data.get('Business'):
            u = User.objects.get(username=user.username)
            u.role_profile = 1
            u.save()
        else:
            u = User.objects.get(username=user.username)
            u.role_profile = 2
            u.save()


class MyRegistrationView(RegisterView):
    serializer_class = MyRegistrationSerializer


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User.objects.filter(role_profile=1)
        user.get_all_permissions()
        user.save()

        return user

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
