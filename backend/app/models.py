from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator


class User(AbstractUser):
    BUSINESS = 1
    CUSTOMER = 2
    ROLE_CHOICES = (
        (BUSINESS, 'Business'),
        (CUSTOMER, 'Customer')
    )
    NOMAL = 1
    KAKAO = 2
    FACEBOOK = 3
    NAVER = 4
    USER_TYPE = (
        (NOMAL, 'Nomal'),
        (KAKAO, 'Kakao'),
        (FACEBOOK, 'Facebook'),
        (NAVER, 'Naver')
    )
    # 기본 정보
    role_profile = models.PositiveSmallIntegerField('BC 유형', choices=ROLE_CHOICES, null=True, blank=True)
    user_type = models.PositiveSmallIntegerField('사용자 유형', choices=USER_TYPE, null=True, blank=True, default=1)
    email = models.EmailField('이메일', max_length=100, blank=True, null=True)

    def __str__(self):
        return str(self.username)


class Store(models.Model):
    u_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    store_name = models.CharField('가게 이름', max_length=30)
    business_number = models.IntegerField('사업자 번호')
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return str(self.store_name)


class Review(models.Model):
    s_id = models.ForeignKey(Store, on_delete=models.CASCADE, null=True)
    comment = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    star_score = models.IntegerField(default=1, validators=[MinValueValidator(1),
                                                            MaxValueValidator(5)])


class Review_file(models.Model):
    r_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=True)
    filename = models.CharField(max_length=100)
    original_name = models.CharField(max_length=100)
    image = models.ImageField(null=True, blank=True)


class Review_comment(models.Model):
    r_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=True)
    # u_id = User.id
    # u_id = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE, null=True)
    u_id = models.IntegerField(User, null=True, blank=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

