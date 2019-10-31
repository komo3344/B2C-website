from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.registration.views import RegisterView
from rest_framework import serializers
from .models import User, Store, Review, Review_comment, \
    Review_file
from django.contrib.auth.models import Group


class MyRegistrationSerializer(RegisterSerializer):
    Business = serializers.BooleanField(required=False)

    def custom_signup(self, request, user):
        if self.validated_data.get('Business'):
            u = User.objects.get(username=user.username)
            u.role_profile = 1
            business_group = Group.objects.get(name='business')
            business_group.user_set.add(u)
            u.is_staff = True
            u.save()
        else:
            u = User.objects.get(username=user.username)
            u.role_profile = 2
            customer_group = Group.objects.get(name='customer')
            customer_group.user_set.add(u)
            u.save()


class MyRegistrationView(RegisterView):
    serializer_class = MyRegistrationSerializer


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
        fields = ('url', 'id', 's_id', 'u_id', 'comment', 'created_at', 'star_score',)


class ReviewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_comment
        fields = ('url', 'id', 's_id', 'r_id', 'u_id', 'comment', 'created_at')


class ReviewFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_file
        fields = ('url', 'id', 'r_id', 'filename', 'original_name', 'image')

