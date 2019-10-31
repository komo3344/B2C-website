from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Store, Review, Review_file, Review_comment


class MyUserAdmin(UserAdmin):
    model = User

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('role_profile', 'user_type')}),
    )

    list_display = ('username', 'email', 'user_type', 'role_profile')
    readonly_fields = ['username', 'email', 'role_profile', 'user_type']


class StoreAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(StoreAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs.all()
        return qs.filter(u_id=request.user)

    def get_readonly_fields(self, request, obj=None):
        if request.user.is_staff:
            if request.user.is_superuser:
                return []
            else:
                return [f.name for f in self.model._meta.fields]

    def reviews_list(self, obj):
        reviews = Review.objects.filter(s_id=obj)
        return reviews.count()

    reviews_list.short_description = '리뷰 수'
    list_display = ('store_name', 'u_id', 'business_number', 'reviews_list')
    search_fields = ('store_name', 'business_number')
    readonly_fields = ['u_id', 'store_name', 'business_number', ]
    admin.ModelAdmin.short_description = "Review"


class ReviewAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(ReviewAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs.all()
        return qs.filter(u_id=request.user)

    def get_readonly_fields(self, request, obj=None):
        if request.user.is_staff:
            if request.user.is_superuser:
                return []
            else:
                return [f.name for f in self.model._meta.fields]
    list_display = ('s_id', 'u_id', 'star_score', 'created_at',)
    search_fields = ('s_id', 'u_id', 'star_score', 'created_at',)
    readonly_fields = ['s_id', 'u_id', 'star_score', 'created_at', ]


class Review_comment_Admin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(Review_comment_Admin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs.all()
        return qs.filter(u_id=request.user)

    def get_readonly_fields(self, request, obj=None):
        if request.user.is_staff:
            if request.user.is_superuser:
                return []
            else:
                return [f.name for f in self.model._meta.fields]
    list_display = ('r_id', 'u_id', 'created_at',)
    readonly_fields = ['r_id', 'u_id', 's_id']


admin.site.register(User, MyUserAdmin)
admin.site.register(Store, StoreAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Review_file)
admin.site.register(Review_comment, Review_comment_Admin)
